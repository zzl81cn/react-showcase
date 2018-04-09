const path = require('path');

module.exports = {
  // entry
  entry: path.join(__dirname, 'src/index.js'),

  // output
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  }
};