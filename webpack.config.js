const path = require('path');

module.exports = {
  entry: './src/chrome_api/background.js',
  devtool: 'cheap-module-source-map',
  mode : 'development',
  output: {
    filename: 'background.js',
    path: path.resolve(__dirname, 'build'),
  },
};
