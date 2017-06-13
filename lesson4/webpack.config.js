/**
 * Created by zzl81cn on 2017/6/7.
 */
const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'app/app.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['babel-preset-es2015', 'babel-preset-react']
				}
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader?limit=8192'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	}
};