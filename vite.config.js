require("dotenv").config();
const path = require("path");
import VitePluginInjectPreload from 'vite-plugin-inject-preload'

export default {
	resolve: {
		alias: {
			PureScript: process.env.PROD_EXPERIMENTAL ? path.resolve(__dirname, 'output-es/Main/') : path.resolve(__dirname, 'output/Main/'),
		},
	},
	assetsInclude: ['**/*.glsl', '**/*.m4a'],
	build: {
		minify: process.env.DISABLE_MINIMIZATION === "true" ? true : false,
	}, plugins: [
		VitePluginInjectPreload({
			files: [
				{
					match: /^.+\.png/,
				},
				{
					match: /^.+\.jpg/,
				}
			]
		})
	]
}
