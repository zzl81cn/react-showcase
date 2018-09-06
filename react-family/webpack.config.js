const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 它会将所有的入口 chunk(entry chunks)中引用的 *.css，移动到独立分离的 CSS 文件

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      path.join(__dirname, 'src/index.js')
    ],
    vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux']
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[chunkhash].js', // find how to use
    chunkFilename: '[name].[chunkhash].js',
    // 打包的时候，让静态文件的链接定位到静态服务器
    publicPath : '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader']
      })
    }, {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader']
      })
    }, {
      test: /\.(jpg|png|gif)/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:5].css',
      allChunks: true
    }),
    // new ExtractTextPlugin('style.css'),
    // 引入顺序在这里很重要。CommonsChunkPlugin 的 'vendor' 实例，必须在 'runtime' 实例之前引入。
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
      // ,name: 'runtime'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    new webpack.DefinePlugin({
      'process.env': {'NODE_ENV': JSON.stringify('production')}
    }),
    new UglifyJsPlugin()
  ],
  resolve: {
    // 别名，可以简化文件引入时的路径
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      component: path.join(__dirname, 'src/component'),
      router: path.join(__dirname, 'src/router'),
      actions: path.join(__dirname, 'src/redux/actions'),
      reduxPath: path.join(__dirname, 'src/redux')
    }
  }
}