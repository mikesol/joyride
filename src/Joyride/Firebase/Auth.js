export const firebaseAuth = (app) => () =>
	import("firebase/auth").then(({ getAuth }) => getAuth(app));

export const onAuthStateChanged =
	(autoAnon) => (signedOut) => (signedIn) => (auth) => () =>
		import("firebase/auth").then(
			({ getAuth, onAuthStateChanged, signInAnonymously }) => {
				let hasTriedAnon = false;
				const thunk = onAuthStateChanged(auth, (user) => {
					if (user) {
						signedIn(user)();
					} else {
						if (autoAnon && !hasTriedAnon) {
							hasTriedAnon = true;
							signInAnonymously(auth)
								.then(() => {
									// Signed in..
									// do nothing
								})
								.catch((error) => {
									const errorCode = error.code;
									const errorMessage = error.message;
									console.error(errorCode, errorMessage);
								});
						} else {
							signedOut();
						}
					}
				});
				return thunk;
			}
		);
