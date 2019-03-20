const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
    entry: [
        'react-hot-loader/patch',
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = webpackConfig;
