const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.base.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    hot: true,
    writeToDisk: true, // 输出调试文件
    // stats: 'minimal',
    overlay: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8090
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {},
  mode: 'development'
})
