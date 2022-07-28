export const firebaseAnalytics = (app) => () =>
	import("firebase/analytics").then(({ getAnalytics }) =>
		getAnalytics(process.env.NODE_ENV === "production" ? app : undefined)
	);