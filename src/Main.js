export const useLilGui = () => process.env.LIL_GUI === "true";
export const force4 = () => process.env.FORCE_4 === "true";
export const useFirebaseEmulatorInDevMode = (db) => (auth) => () => {
	if (process.env.NODE_ENV !== "production") {
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
