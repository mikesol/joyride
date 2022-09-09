export const firebaseAnalytics = (app) => () =>
	import("firebase/analytics").then(({ getAnalytics }) =>
		getAnalytics(import.meta.env.VITE_FIREBASE_BUILD === "production" ? app : undefined)
	);