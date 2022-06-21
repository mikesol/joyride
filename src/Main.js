export const emitsTouchEvents = () => {
	try {
		document.createEvent("TouchEvent");
		return true;
	} catch (e) {
		return false;
	}
}

export const useLilGui = () => process.env.LIL_GUI === "true";
export const force4 = () => process.env.FORCE_4 === "true";