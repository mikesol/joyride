export const firebaseAuth = (app) => () =>
	import("firebase/auth").then(({ getAuth }) => getAuth(app));

export const initializeGoogleClient = (cb) => () => {
	window.google.accounts.id.initialize({
		client_id:
			"58052920677-fs42m1rdh38g8rt9u6jv6s63c4ga9v0r.apps.googleusercontent.com",
		callback: (i) => cb(i)(),
	});
};

export const signInWithGoogle = (auth) => () => {
	google.accounts.id.prompt();
	return Promise.resolve(true);
};

export const currentUserImpl = (nothing) => (just) => (auth) => () =>
	auth.currentUser ? just(auth.currentUser) : nothing;

export const upgradeAuth = (auth) => (credential) => () => {
	return linkWithCredential(auth.currentUser, credential)
		.then((usercred) => {
			const user = usercred.user;
			console.log("Anonymous account successfully upgraded", user);
		})
		.catch((error) => {
			console.log("Error upgrading anonymous account", error);
		});
}

export const onAuthStateChanged = (errorF) => (signedInAnon) => (signedInGoogle) => (auth) => () =>
	import("firebase/auth").then(({ onAuthStateChanged, signInAnonymously }) => {
		const thunk = onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log('auth state change with user', user);
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
	});
