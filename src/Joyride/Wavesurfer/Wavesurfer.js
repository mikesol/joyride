import WaveSurfer from "wavesurfer.js";

export const makeWavesurfer = (success) => (container) => (url) => () => {
	const ws = WaveSurfer.create({
		container: container,
		scrollParent: true,
	});
	ws.load(url);
	ws.on("ready", success);
};
