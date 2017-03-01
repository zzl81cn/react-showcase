/**
 * Created by zzl81cn on 2017/2/22.
 * See:
 * 1.https://zhuanlan.zhihu.com/p/21287263
 * 2.https://github.com/zzl81cn/build-a-hn-front-page
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
		// Use path.resolve single entry(由这个配置的入口输出的路径不对，没有文件)
		// path: path.resolve(__dirname, './src/index.js'),
		// For mutiple output target.
		// another: './src/another.js'
		// 第三方包，需要output为多文件输出
		vendor: [
			'react',
			'react-dom'
		]
	},
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
		/*loaders:[
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				// css-loader 处理 css 文件中的 url() 表达式.
				// style-loader 将 css 代码插入页面中的 style 标签中.
				loader: ['style-loader', 'css-loader', 'autoprefixer-loader?browsers=last 2 versions', 'sass-loader']
			},
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'stage-0', 'react']
				}
			},
			{
				test: /\.jsx?$/,
				include: [path.resolve(__dirname, './src')],
				exclude: '/node_modules/',
				loader: 'babel-loader',
				query: {
					plugins: ['transform-runtime'],
					presets: ['es2015', 'stage-0', 'react']
				}
			},
			{
				test: /\.(png|jpg|gif)$/,
				// 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
				loader: 'url-loader?limit=16384'
			}
		]*/
		rules:[
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				// css-loader 处理 css 文件中的 url() 表达式.
				// style-loader 将 css 代码插入页面中的 style 标签中.
				use: [
					{
						loader: 'style-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: '[name]_[local]_[hash:base64:5]'
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: function () {
								return [
									require('precss'),
									require('autoprefixer')
								];
							}
						}
					},
					/*{
						loader: 'autoprefixer-loader',
						options: {
							browsers: 'last 2 versions'
						}
					},*/
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						}
					},
				]
			},
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'stage-0', 'react']
				}
			},
			{
				test: /\.jsx?$/,
				include: [path.resolve(__dirname, './src')],
				exclude: '/node_modules/',
				loader: 'babel-loader',
				query: {
					plugins: ['transform-runtime'],
					presets: ['es2015', 'stage-0', 'react']
				}
			},
			{
				test: /\.(png|jpg|gif)$/,
				// 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
				loader: 'url-loader?limit=16384'
			}
		]
	},
	plugins: [
		// For webpack 1.x
		// new webpack.optimize.CommonsChunkPlugin(/*chunck name=*/'vendor',/*chunck filename*/'vendor.bundle.js')
		// For webpack 2.x
		new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'}),
		// 注意: 默认情况下，React 将会在开发模式，很缓慢，不建议用于生产。要在生产模式下使用 React，设置环境变量 NODE_ENV 为 production （使用 envify 或者 webpack's DefinePlugin）。例如：
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		})
	],
	resolve:{
		extensions:['.js', 'jsx', '.json']
	}
	/*devServer: {
		hot: true,
		inline: true,
		compress: true,
		port: 3000
	}*/

}