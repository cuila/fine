const path = require("path");
const Html = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const IconAssetPlugin = new CopyWebpackPlugin([
  { from: "src/assets/**", to: ".", flatten: true }
]);

const HtmlWebpackPlugin = new Html({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  mode: 'production',
  devtool: 'hidden-source-map',
  target: 'web',
  entry: './src/index.jsx',
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js',
  },
  plugins: [
    HtmlWebpackPlugin,
    IconAssetPlugin,
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    host: "localhost",
    port: 3000,
    open: false,
    overlay: false,
    compress: true,
    historyApiFallback: true,
    stats: "errors-warnings"
  },
  performance: false
};
