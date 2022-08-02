export const styleAudio = () => {
	const $$audio = document.getElementsByTagName("audio");
	const audio = Array.prototype.slice.call($$audio);

	audio.forEach((element) => {
		element.id = "audio";
		element.classList.add("op-player");
		element.classList.add("op-player__media");
		element.setAttribute("controls", true);
		element.setAttribute("playsinline", true);
	});
};
