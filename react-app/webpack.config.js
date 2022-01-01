const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // https://stackoverflow.com/questions/49624202/why-use-babel-loader-with-ts-loader
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader","tslint-loader"]
      },

      {
        test: /\.scss$/,
        use: [
            // fallback to style-loader in development
            // process.env.NODE_ENV !== 'production' ? 'style-loader' : 
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
  })
  ]
}