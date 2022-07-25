import WaveSurfer from "wavesurfer.js";
import PlayheadPlugin from "wavesurfer.js/dist/plugin/wavesurfer.playhead.js";
import MarkersPlugin from "../../src/waveshaper.js/customMarkersPlugin.js";
import CursorPlugin from "wavesurfer.js/dist/plugin/wavesurfer.cursor.js";
import TimelinePlugin from "wavesurfer.js/dist/plugin/wavesurfer.timeline.js";
/**
 * Use formatTimeCallback to style the notch labels as you wish, such
 * as with more detail as the number of pixels per second increases.
 *
 * Here we format as M:SS.frac, with M suppressed for times < 1 minute,
 * and frac having 0, 1, or 2 digits as the zoom increases.
 *
 * Note that if you override the default function, you'll almost
 * certainly want to override timeInterval, primaryLabelInterval and/or
 * secondaryLabelInterval so they all work together.
 *
 * @param: seconds
 * @param: pxPerSec
 */
function formatTimeCallback(seconds, pxPerSec) {
	seconds = Number(seconds);
	var minutes = Math.floor(seconds / 60);
	seconds = seconds % 60;

	// fill up seconds with zeroes
	var secondsStr = Math.round(seconds).toString();
	if (pxPerSec >= 25 * 10) {
		secondsStr = seconds.toFixed(2);
	} else if (pxPerSec >= 25 * 1) {
		secondsStr = seconds.toFixed(1);
	}

	if (minutes > 0) {
		if (seconds < 10) {
			secondsStr = "0" + secondsStr;
		}
		return `${minutes}:${secondsStr}`;
	}
	return secondsStr;
}

/**
 * Use timeInterval to set the period between notches, in seconds,
 * adding notches as the number of pixels per second increases.
 *
 * Note that if you override the default function, you'll almost
 * certainly want to override formatTimeCallback, primaryLabelInterval
 * and/or secondaryLabelInterval so they all work together.
 *
 * @param: pxPerSec
 */
function timeInterval(pxPerSec) {
	var retval = 1;
	if (pxPerSec >= 25 * 100) {
		retval = 0.01;
	} else if (pxPerSec >= 25 * 40) {
		retval = 0.025;
	} else if (pxPerSec >= 25 * 10) {
		retval = 0.1;
	} else if (pxPerSec >= 25 * 4) {
		retval = 0.25;
	} else if (pxPerSec >= 25) {
		retval = 1;
	} else if (pxPerSec * 5 >= 25) {
		retval = 5;
	} else if (pxPerSec * 15 >= 25) {
		retval = 15;
	} else {
		retval = Math.ceil(0.5 / pxPerSec) * 60;
	}
	return retval;
}

/**
 * Return the cadence of notches that get labels in the primary color.
 * EG, return 2 if every 2nd notch should be labeled,
 * return 10 if every 10th notch should be labeled, etc.
 *
 * Note that if you override the default function, you'll almost
 * certainly want to override formatTimeCallback, primaryLabelInterval
 * and/or secondaryLabelInterval so they all work together.
 *
 * @param pxPerSec
 */
function primaryLabelInterval(pxPerSec) {
	var retval = 1;
	if (pxPerSec >= 25 * 100) {
		retval = 10;
	} else if (pxPerSec >= 25 * 40) {
		retval = 4;
	} else if (pxPerSec >= 25 * 10) {
		retval = 10;
	} else if (pxPerSec >= 25 * 4) {
		retval = 4;
	} else if (pxPerSec >= 25) {
		retval = 1;
	} else if (pxPerSec * 5 >= 25) {
		retval = 5;
	} else if (pxPerSec * 15 >= 25) {
		retval = 15;
	} else {
		retval = Math.ceil(0.5 / pxPerSec) * 60;
	}
	return retval;
}

/**
 * Return the cadence of notches to get labels in the secondary color.
 * EG, return 2 if every 2nd notch should be labeled,
 * return 10 if every 10th notch should be labeled, etc.
 *
 * Secondary labels are drawn after primary labels, so if
 * you want to have labels every 10 seconds and another color labels
 * every 60 seconds, the 60 second labels should be the secondaries.
 *
 * Note that if you override the default function, you'll almost
 * certainly want to override formatTimeCallback, primaryLabelInterval
 * and/or secondaryLabelInterval so they all work together.
 *
 * @param pxPerSec
 */
function secondaryLabelInterval(pxPerSec) {
	// draw one every 10s as an example
	return Math.floor(10 / timeInterval(pxPerSec));
}

export const makeWavesurfer =
	(markers) => (dropCb) => (success) => (container) => (url) => () => {
		const ws = WaveSurfer.create({
			backend: "MediaElement",
			waveColor: "#A8DBA8",
			progressColor: "#3B8131",
			container: container,
			mediaControls: true,
			scrollParent: true,
			plugins: [
				PlayheadPlugin.create({
					returnOnPause: true,
					moveOnSeek: true,
					draw: true,
				}),
				TimelinePlugin.create({
					container: "#timeline",
					formatTimeCallback: formatTimeCallback,
					timeInterval: timeInterval,
					primaryLabelInterval: primaryLabelInterval,
					secondaryLabelInterval: secondaryLabelInterval,
					primaryColor: "#0b83a7",
					secondaryColor: "#ef0ea6",
					primaryFontColor: "#0b83a7",
					secondaryFontColor: "#ef0ea6",
				}),
				MarkersPlugin.create({
					// hack to get draggable working. we delete the first element after
					markers: [{ time: 0.0, color: "#00ffff", draggable: true }].concat(
						markers.map((m) => ({ draggable: true, ...m }))
					),
				}),
				CursorPlugin.create({
					showTime: true,
					opacity: 1,
					customShowTimeStyle: {
						"background-color": "#000",
						color: "#fff",
						padding: "2px",
						"font-size": "10px",
					},
				}),
			],
			//
		});
		ws.load(url);
		ws.on("ready", success);
		ws.markers.remove(0);
		ws.on("marker-drop", function ({time, el: { $$joyrideIndex }}) {
			dropCb($$joyrideIndex)(time)();
		});
		for (let i = 0; i < ws.markers.markers.length; i++) {
			ws.markers.markers[i].el.$$joyrideIndex = i;
		}
		return ws;

	};

export const zoom = (ws) => (z) => () => ws.zoom(z);
export const addMarker = (ws) => (p) => () => {
	const m = ws.addMarker({ draggable: true, ...p });
	m.el.$$joyrideIndex = ws.markers.markers.length - 1;
}

export const hideMarker = (ws) => (ix) => () => {
	ws.markers.markers[ix].el.classList.remove("visible");
	ws.markers.markers[ix].el.classList.add("invisible");
};

export const mute = hideMarker;

export const muteExcept = (ws) => ($ixs) => () => {
	if ($ixs.length === 0) {
		for (let i = 0; i < ws.markers.markers.length; i++) {
			ws.markers.markers[i].el.classList.remove("invisible");
			ws.markers.markers[i].el.classList.add("visible");
		}
	} else {
		const ixs = [...$ixs];
		for (let i = 0; i < ws.markers.markers.length; i++) {
			if (ixs.length && i == ixs[0][1]) {
				ixs.shift();
			}
			if (ixs.length && i >= ixs[0][0] && i < ixs[0][1]) {
				ws.markers.markers[i].el.classList.remove("invisible");
				ws.markers.markers[i].el.classList.add("visible");
				continue;
			}
			ws.markers.markers[i].el.classList.remove("visible");
			ws.markers.markers[i].el.classList.add("invisible");
		}
	}
};

export const removeMarker = (ws) => (ix) => () => {
	ws.markers.remove(ix);
};

export const showMarker = (ws) => (ix) => () => {
	ws.markers.markers[ix].el.classList.remove("invisible");
	ws.markers.markers[ix].el.classList.add("visible");
};