export const guiImpl = () => import("lil-gui").then((GUI) => new GUI.default());
export const mockGui = () => {
	return { add: () => {}, addColor: () => {} };
};
export const linkUpGuiImpl = (gui) => (x) => () => {
	const urObject = { value: {} };
	const myObject = urObject.value;
	for (const [key, value] of Object.entries(x)) {
		if (value.type === "slider") {
			myObject[key] = value.v.default;
			gui.add(myObject, key, value.v.min, value.v.max, value.v.step);
		} else if (value.type === "numeric") {
			myObject[key] = value.v;
			gui.add(myObject, key);
		} else if (value.type === "checkbox") {
			myObject[key] = value.v;
			gui.add(myObject, key);
		} else if (value.type === "color") {
			myObject[key] = value.v;
			gui.addColor(myObject, key);
		}
	}
	return urObject;
};
