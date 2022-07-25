module.exports = {
	content: [
		"./src/**/*.{purs,js}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		extend: {},
	},
	plugins: [require("tw-elements/dist/plugin")],
};
