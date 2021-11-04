const merge = require('webpack-merge');
const common = require('../../webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  entry: './es/index.js',
  output: {
    filename: 'reboot-ui-sample.js',
    library: 'reboot-ui-sample',
    path: path.resolve(__dirname, './dist'),
  },
});
