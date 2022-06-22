export const firebaseAuth = (app) => () =>
	import("firebase/auth").then(({ getAuth }) => getAuth(app));

export const onAuthStateChanged =
	(errorF) => (signedIn) => (auth) => () =>
		import("firebase/auth").then(
			({ onAuthStateChanged, signInAnonymously }) => {
				const thunk = onAuthStateChanged(auth, (user) => {
					if (user) {
						signedIn(user)();
					} else {
						if (autoAnon) {
							signInAnonymously(auth)
								.then(() => {
									// Signed in..
									// do nothing
								})
								.catch((error) => {
									errorF(error)();
								});
						} else {
							signedOut();
						}
					}
				});
				return thunk;
			}
		);
