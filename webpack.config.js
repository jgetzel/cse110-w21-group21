const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  /** Here in entry we define our js chunks that we can variably use in different html pages */
  entry: {
    components: './source/assets/scripts/components/index.js',
    database: './source/assets/scripts/database/index.js',
    main: './source/assets/scripts/main.js',
    timer: './source/assets/scripts/timer.js',
    history: './source/assets/scripts/history.js',
  },
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    /** Load the index page with the 3 chunks of javascript */
    new HtmlWebpackPlugin({
      template: "./source/index.html",
      chunks: ['main', 'components', 'database']
    }),
    /** Load the timer page with the 3 chunks of javascript */
    new HtmlWebpackPlugin({
      template: "./source/timer.html",
      filename: "timer.html",
      chunks: ['timer', 'components', 'database']
    }),
    /** Load the history page with only history, components and database chunks */
    new HtmlWebpackPlugin({
      template: "./source/history.html",
      filename: "history.html",
      chunks: ["history", "components", "database"]
    }),
    new CopyPlugin({
      patterns: [
        { from: "source/assets/images", to: "./assets/images", },
        { from: "source/assets/styles", to: "./assets/styles", },
        { from: "source/assets/svgImages", to: "./assets/svgImages", },
      ],
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'assets',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
};