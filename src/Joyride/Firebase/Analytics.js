export const firebaseAnalytics = (app) => () => import ("firebase/analytics").then(({getAnalytics}) => getAnalytics(app));