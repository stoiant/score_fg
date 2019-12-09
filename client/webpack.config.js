const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'src/app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
      }, {
        test: /\.css$/,
        loaders: ["style", "css"],
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]",
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file?name=fonts/[name].[ext]",
      }, {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file?name=img/[name].[ext]',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'theScore Demo',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),
    new CleanWebpackPlugin({
      dry: false,
      verbose: true,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: ['**/*'],
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new BrowserSyncPlugin({
      server: {
        baseDir: ['public'],
      },
      port: 3000,
      host: 'localhost',
    }),
    new CopyWebpackPlugin([{
      from: './manifest.json',
    }, {
      from: './manifest.webapp',
    }, {
      from: './robots.txt',
    }, {
      from: './favicon.ico',
    }, {
      from: './src/img/**/*',
      to: './',
    },
    ]),
  ],
  stats: {
    colors: true,
  },
};
