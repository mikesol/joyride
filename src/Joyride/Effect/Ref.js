export const writeToRecordImpl = function (key) {
	return function (val) {
		return function (ref) {
			return function () {
				ref.value[key] = val;
			};
		};
	};
};

export const readFromRecordImpl = function (key) {
	return function (ref) {
		return function () {
			return ref.value[key];
		};
	};
};
