export const firebaseAnalytics = (app) => () =>
	import("firebase/analytics").then(({ getAnalytics }) =>
		getAnalytics(import.meta.env.NODE_ENV === "production" ? app : undefined)
	);