/**
 * Created by zzl81cn on 2017/2/22.
 * See:
 * 1.https://github.com/zzl81cn/build-a-hn-front-page
 */
let path = require('path');
let webpack = require('webpack');

module.exports = {
	// For single entry string type.
	// entry: './src/index.js',
	// For single&mutiple entry array type.
	// entry: ['./src/index.js','./src/another.js'],
	// For single entry object type.
	entry: {
		// Normal method type.
		index: './src/index.js',
		// For mutiple output target.
		// another: './src/another.js'
		// 第三方包，需要output为多文件输出
		vendor: [
			'react',
			'react-dom'
		]
	},
	// Use path.resolve single entry
	// entry: path.resolve(__dirname, './src/index.js'),
	// For single output target.
	/*output: {
		path: './dist/',
		filename: 'index.js'
	},*/
	// For mutiple output target.
	// 应对entry的vendor，这里用多文件输出配置，还要开启下面的plugins
	output: {
		// path: './dist/',
		path: path.resolve(__dirname, "./dist"),
		filename: '[name].js',
		// 使用webpack-dev-ser时代码在内存中，加上这个路径实现虚拟路径
		publicPath: '/dist'
	},
	module: {
		loaders:[
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
			},
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'stage-0', 'react']
				}
			}
		]
	},
	plugins: [
		// new webpack.optimize.CommonsChunkPlugin(/*chunck name=*/'vendor',/*chunck filename*/'vendor.bundle.js')
		new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'})
	],
	resolve:{
		extensions:['.js','.json']
	}
	/*devServer: {
		hot: true,
		inline: true,
		compress: true,
		port: 3000
	}*/

}