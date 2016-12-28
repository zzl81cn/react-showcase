/**
 * Created by zzl81cn_pre on 2016/12/27.
 */
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack/hot/only-dev-server',
		'./js/app.js'
	],
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js'
	},
	module: [
		{ test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
		{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
		{ test: /\.css$/, loader: "style!css" },
		{ test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/,	query: {presets: ['es2015']}}
	],
	plugins: [
		new webpack.NoErrorsPlugin()
	]
};