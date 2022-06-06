import { v4 as uuidv4 } from "uuid";

export const _PubNub = () => import("pubnub");

export const pubnub_ = (PubNub) => (listener) => {
	return function () {
		var publisher = uuidv4();
		var pn = new PubNub.default({
			publishKey: "pub-c-672671ca-ea5d-4c31-9bbf-1c123cddfa2b",
			subscribeKey: "sub-c-9e61eeea-570c-48cd-8088-ad367df0dcf7",
			uuid: publisher,
		});
		pn.subscribe({
			channels: ["feedback_diffs"],
		});
		pn.addListener({
			message: function (msg_) {
				//console.log(msg);
				var msg = Object.assign({}, msg_);
				msg.timetoken = parseInt(msg.timetoken) / 10000;
				if (msg.publisher !== publisher) {
					listener(msg)();
				}
			},
		});
		return pn;
	};
};

export const publish_ = (pubnub) => {
	return function (channel) {
		return function (message) {
			return function () {
				pubnub.publish({
					channel: channel,
					message: message,
				});
			};
		};
	};
};
