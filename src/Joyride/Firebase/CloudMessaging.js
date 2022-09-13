export const firebaseCloudMessaging = (app) => () =>
	import("firebase/messaging").then(({ getMessaging }) =>
		getMessaging(import.meta.env.VITE_FIREBASE_BUILD === "production" ? app : undefined)
	);