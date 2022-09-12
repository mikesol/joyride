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

export const exitFullScreen = (rej) => (res) => () => {
	if (document.exitFullscreen) {
		return document.fullscreenElement ? document.exitFullscreen().then(res, rej) : Promise.resolve(res());
	} else {
		rej();
		Promise.reject();
	}
};
