const path = require("path");
const webpack = require("webpack");

module.exports = {
	mode: "production",
	devtool: "source-map",
	output: {
		filename: "main.bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				include: [path.resolve(__dirname, "./assets/js")],
				options: {
					presets: ["@babel/preset-env"],
					plugins: ["@babel/plugin-proposal-class-properties"]
				}
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		})
	]
};
