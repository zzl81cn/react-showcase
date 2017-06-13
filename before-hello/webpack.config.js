let path = require('path');
let webpack = require('webpack');
let node_module_dir = path.resolve(__dirname, 'node_module');
// 能在所有JS模块里面读取“__DEV__”这个值
// 注意: 默认情况下，React 将会在开发模式，很缓慢，不建议用于生产。要在生产模式下使用 React，设置环境变量 NODE_ENV 为 production （使用 envify 或者 webpack's DefinePlugin）。例如：
/*new webpack.DefinePlugin({
	"process.env": {
		NODE_ENV: JSON.stringify("production")
	}
});*/
let definePlugin = new webpack.DefinePlugin({
	__DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
});

module.exports = {
	entry: [
		// 'babel-polyfill',
		// 'webpack/hot/dev-server',
		// 'webpack-dev-server/client?http://localhost:8083',
		path.resolve(__dirname, 'app/main.js')
		// path.resolve(__dirname, 'hello/hello-entry.js')
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	// output: [path.resolve(__dirname, 'build/bundle.js')],
	devServer: {
		historyApiFallback: true
	},
	plugins: [
		definePlugin,
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [{
			// load JSX
			test: /\.jsx?$/,
			// 加载babel模块
			loader: "babel-loader",
			include: [
				path.resolve(__dirname, 'app'),
			],
			exclude: [
				node_module_dir
			],
			query: {
				plugins: ['transform-runtime'],
				presets: ['es2015', 'stage-0', 'react']
			}
		}, {
			// load scss
			test: /\.scss$/,
			loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
		}, {
			// load css
			test: /\.css$/,
			include: [
				path.resolve(__dirname, 'app'),
			],
			loader: 'style-loader!css-loader?modules&localIdentName=_[local]_[hash:base64:5]'
		}]
	}
};
