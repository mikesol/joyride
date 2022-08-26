require("dotenv").config();
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInjectPreload = require("@principalstudio/html-webpack-inject-preload");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	devtool: "source-map",
	resolve: {
		alias: {
			PureScript: process.env.PROD_EXPERIMENTAL ? path.resolve(__dirname, 'output-es/Main/') : path.resolve(__dirname, 'output/Main/') ,
		},
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	}, optimization: {
		minimize: process.env.DISABLE_MINIMIZATION ? false : true,
	},
	plugins: [
		new FaviconsWebpackPlugin(),
		new CopyPlugin({
			patterns: [{ from: path.resolve(__dirname, "src/models"), to: "models" }],
		}),
		new HtmlWebpackPlugin({
			template: "index.html",
			scriptLoading: "defer",
		}),
		new HtmlWebpackInjectPreload({
			files: [
				{
					match: /^(?!assets.*$).*\.png/,
					attributes: { as: "image" },
				},
				{
					match: /^(?!assets.*$).*\.jpg/,
					attributes: { as: "image" },
				},
			],
		}),
		new webpack.EnvironmentPlugin({
			LIL_GUI: "true",
			FORCE_4: "false",
		}),
		// too many chunks made loading suck
		// too few make one mega-huge module which leads to a steep initial load
		// (bundle.js is 3.13 MiB when everything is together)
		// try 3 for now, scale up if needed
		// 3 produces the following sizes. they're still big, but they suck slightly less than 1:
		//   bundle.js (1.4 MiB)
		//   8.bundle.js (1.04 MiB)
		//   277.bundle.js (711 KiB)
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 3,
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/i,
				include: path.resolve(__dirname, "src"),
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				include: [path.resolve(__dirname, "src")],
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.glsl/,
				include: [path.resolve(__dirname, "src")],
				type: "asset/source",
			},
			{
				test: /\.mp3/,
				type: "asset/resource",
			},
			{
				test: /\.m4a/,
				type: "asset/resource",
			},
			{
				test: /\.jpg/,
				type: "asset/resource",
			},
			{
				test: /\.png/,
				type: "asset/resource",
			},
			{
				test: /\.css$/i,
				include: [
					path.resolve(__dirname, "src"),
					path.resolve(__dirname, "node_modules/openplayerjs/dist"),
				],
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		historyApiFallback: {
			index: "index.html",
		},
	},
};
