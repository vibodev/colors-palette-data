const webpack = require('webpack')
const path = require('path')
const WebpackBar = require('webpackbar')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    'index': './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'ColorPalettes',
    umdNamedDefine: true
  },
  externals:{
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
        }
      }
    ]
  },
  plugins: [
    new WebpackBar(),
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin()
  ],
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
