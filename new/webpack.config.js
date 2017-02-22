/**
 * Created by zzl81cn on 2017/2/22.
 */
let webpack = require('webpack');

module.exports = {
	entry: ['./src/index.js','./src/another.js'],
	output: {
		path: './dist/',
		filename: 'index.js'
	}
}