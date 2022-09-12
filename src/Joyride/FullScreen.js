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
	if (document.body.exitFullscreen) {
		return document.body.exitFullscreen().then(res, rej);
	} else {
		rej();
		Promise.reject();
	}
};
