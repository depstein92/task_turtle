const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
       {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
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
  mode: 'production',
  resolve: {
    extensions: [ '*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
      historyApiFallback: true,
      contentBase: './',
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    }
};
