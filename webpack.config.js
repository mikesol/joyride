require("dotenv").config();
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	devtool: "source-map",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	plugins: [
		new CopyPlugin({
			patterns: [{ from: path.resolve(__dirname, "src/models"), to: "models" }],
		}),
		new HtmlWebpackPlugin({
			template: "index.html",
		}),
		new webpack.EnvironmentPlugin({
			LIL_GUI: "true",
			FORCE_4: "false",
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
