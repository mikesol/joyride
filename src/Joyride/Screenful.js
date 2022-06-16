export const screenful = () => import("screenfull");
export const isEnabled = (screenful) => screenful.isEnabled;
export const request = (screenful) => () => screenful.request();
