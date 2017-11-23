const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const devSettings = require('./settings.dev.json');

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve('./'),
  },
  externals: {
    appSettings: JSON.stringify(devSettings),
  },
});
