export const requestPermissionIsAFunction = () => 	typeof DeviceMotionEvent !== "undefined" &&
		typeof DeviceMotionEvent.requestPermission === "function"


export const orientationPermission = () => {
	if (
		typeof DeviceMotionEvent !== "undefined" &&
		typeof DeviceMotionEvent.requestPermission === "function"
	) {
		// (optional) Do something before API request prompt.
		return DeviceMotionEvent.requestPermission().then(
			(response) => {
				// (optional) Do something after API prompt dismissed.
				if (response == "granted") {
					return true;
				}
				return false;
			},
			(e) => {
				console.error(e);
				Promise.reject(e);
			}
		);
	} else {
		return Promise.resolve(true);
	}
};
