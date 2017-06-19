/**
 * Created by zzl81cn on 2017/6/16.
 */
const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		filename: './bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['babel-preset-es2015','babel-preset-react']
				}
			}
		]
	}
};