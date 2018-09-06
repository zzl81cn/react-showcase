const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = reuqire('webpack');

commonConfig = {
  entry: {
    app: [
      path.join(__dirname, 'src/index.js')
    ]
  },
  output: {

  },
  moudle: {},
  plugins: {

  },
  resolve: {
    
  }
}

module.exports = commonConfig;