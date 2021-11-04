const merge = require('webpack-merge');
const common = require('../../webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  entry: './es/index.js',
  output: {
    filename: 'richardo2016-ui-kits-sample.js',
    library: 'richardo2016-ui-kits-sample',
    path: path.resolve(__dirname, './dist'),
  },
});
