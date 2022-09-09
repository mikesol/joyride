export const firebaseAuth = (app) => () =>
	import("firebase/auth").then(({ getAuth }) =>
		getAuth(import.meta.env.VITE_FIREBASE_BUILD === "production" ? app : undefined)
	);

export const initializeGoogleClient = (auth) => (success) => () => {
	window.google.accounts.id.initialize({
		client_id:
			"58052920677-fs42m1rdh38g8rt9u6jv6s63c4ga9v0r.apps.googleusercontent.com",
		callback: (i) => {
			console.log("credential received");
			import("firebase/auth").then(
				({ GoogleAuthProvider, linkWithCredential, signInWithCredential }) => {
					console.log("attempting to use credential", i.credential);
					const credential = GoogleAuthProvider.credential(i.credential);
					linkWithCredential(auth.currentUser, credential).then(
						(usercred) => {
							const user = usercred.user;
							console.log("Anonymous account successfully upgraded", user);
							success();
						},
						() => {
							return signInWithCredential(auth, credential).then(
								(usercred) => {
									const user = usercred.user;
									console.log("Account successfully linked to existing credential", user);
									success();
								},
								(error) =>
									console.log("Error upgrading anonymous account", error)
							);
						}
					);
				}
			);
		},
	});
};

export const signInWithGoogle = (err) => () => {
	google.accounts.id.prompt((notification) => {
		// console.log(notification)
		if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
			google.accounts.id.renderButton(
				document.getElementById("google_sign_in"),
				{} // { theme: "outline", size: "large" } // customization attributes
			);
			// err();
		}
	});
};

export const currentUserImpl = (nothing) => (just) => (auth) => () =>
	auth.currentUser ? just(auth.currentUser) : nothing;

export const signOut = (auth) => (cb) => () =>
	auth.signOut().then(() =>
		signInAnonymously(auth).then(
			() => {
				cb();
			},
			(error) => {
				console.error("Could not sign in anonymously after sign out", error);
			}
		)
	);

export const onAuthStateChanged =
	(errorF) => (signedInAnon) => (signedInGoogle) => (auth) => () =>
		import("firebase/auth").then(
			({ onAuthStateChanged, signInAnonymously }) => {
				const thunk = onAuthStateChanged(auth, (user) => {
					if (user) {
						console.log("auth state change with user", user);
						if (user.isAnonymous) {
							signedInAnon(user)();
						} else {
							signedInGoogle(user)();
						}
					} else {
						signInAnonymously(auth)
							.then(() => {
								// Signed in..
								// do nothing
							})
							.catch((error) => {
								errorF(error)();
							});
					}
				});
				return thunk;
			}
		);
