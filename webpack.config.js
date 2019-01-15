/* eslint-disable */

const path = require('path');
const DotenvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dotenv = new DotenvPlugin({
  systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
  silent: false // hide any errors
});

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

const copyWebpackPlugin = new CopyWebpackPlugin([
  { from:'src/assets/images', to:'images' },
  // { from:'server.js', to:'server.js' },
]);

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      // {test: /\.jsx?$/, exclude: /node_modules/, use: {loader: "babel-loader"}},
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {loader: "babel-loader"},
          {loader: "eslint-loader", options: { emitWarning: true }}
        ]
      },
      {
        test: /\.scss$/,
        use: [{loader: "style-loader"},
        {loader: "css-loader"},
        {loader: "sass-loader"}]
      },
      {
        test: /\.svg$/,
        use: [{loader: "babel-loader"},
        {loader: "react-svg-loader", options: { jsx: true }}]
      },
    ],
  },
  plugins: [htmlPlugin, copyWebpackPlugin, dotenv],
  resolve: { extensions: ['.js', '.jsx', '.scss'] },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    port: 9000,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  resolve: {
    unsafeCache: false,
  },
};
