const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production'
})
