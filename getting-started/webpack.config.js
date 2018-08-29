const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Hacker Card', inject: 'body' })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/env',  {
              "loose": true,
              "modules": false
            }],
            '@babel/react'],
          plugins: [
              '@babel/proposal-object-rest-spread',
              '@babel/proposal-class-properties',
              '@babel/transform-runtime',
          ],
          babelrc: false,
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};