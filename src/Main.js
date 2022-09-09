export const useLilGui = () => { return import.meta.env.LIL_GUI === "true" } ;
export const force4 = () => { return import.meta.env.FORCE_4 === "true" };
export const useFirebaseEmulatorInDevMode = (db) => (auth) => () => {
	if (import.meta.env.NODE_ENV !== "production") {
		// use the emulator
		return import("firebase/firestore").then(({ connectFirestoreEmulator }) => {
			connectFirestoreEmulator(db, "localhost", 8080);
      return import("firebase/auth").then(({ connectAuthEmulator }) => {
				connectAuthEmulator(auth, "http://localhost:9099");
				return;
			});
		});
	} else {
		return Promise.resolve();
	}
};
