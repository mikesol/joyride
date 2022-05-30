export const writeToRecordImpl = function (key) {
	return function (val) {
		return function (ref) {
			return function () {
				ref.value[key] = val;
			};
		};
	};
};
