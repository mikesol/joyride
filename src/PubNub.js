import PubNub from "pubnub";
import { v4 as uuidv4 } from "uuid";

export const pubnub_ = (listener) => {
	return function () {
		var publisher = uuidv4();
		var pn = new PubNub({
			publishKey: "pub-c-ce744358-2fba-4c34-ac63-a8c1b06a826e",
			subscribeKey: "sub-c-fb43997a-9871-11ec-82a0-02d5075437d9",
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
	return function (message) {
		return function () {
			pubnub.publish({
				channel: "feedback_diffs",
				message: message,
			});
		};
	};
};
