export const fullscreenEnabled = () =>
	document.fullscreenEnabled ? true : false;
export const requestFullScreen = (rej) => (res) => () => {
	if (document.body.requestFullscreen) {
		return document.body.requestFullscreen().then(res, rej);
	} else {
		rej();
		Promise.reject();
	}
};
