export const firebaseAnalytics = (app) => () =>
	import("firebase/analytics").then(({ getAnalytics }) =>
		getAnalytics(import.meta.env.BUILD_TYPE === "production" ? app : undefined)
	);