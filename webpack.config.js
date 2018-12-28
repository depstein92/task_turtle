const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  resolve: {
    extensions: [ '*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: 'production',
  devServer: {
      historyApiFallback: true,
      contentBase: './',
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    }
};
