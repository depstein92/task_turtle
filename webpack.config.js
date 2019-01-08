const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },

      {
        test: /\.scss$/,
        use: [{ loader: "style-loader" },
              { loader: "css-loader" },
              { loader: "sass-loader" }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file']
      }
    ]
  },
   plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['The machine spirit is prepared on http://localhost:8080'],
        notes: ['Compiled successfully my lord']
      },
      clearConsole: true,
      quiet: true
    }),
     new MiniCssExtractPlugin()
   ],
  resolve: {
    extensions: [ '*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
      historyApiFallback: true,
      contentBase: './',
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      },
      stats: {
         colors: true,
         hash: false,
         version: false,
         timings: false,
         assets: false,
         chunks: false,
         modules: false,
         reasons: false,
         children: false,
         source: false,
         errors: true,
         errorDetails: true,
         warnings: true,
         publicPath: false
      }
    }
};
