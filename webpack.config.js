const path = require("path");
const Html = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const IconAssetPlugin = new CopyWebpackPlugin([
  { from: "src/assets/**", to: ".", flatten: true }
]);

const production = process.env.NODE_ENV === "production";

module.exports = {
  mode: production ? "production" : "development",
  devtool: production ? "hidden-source-map" : "cheap-source-map",
  entry: path.resolve(__dirname, "src/index.jsx"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.(svg|png|jpe?g|gif|ico)(\?\S*)?$/,
        loader: "file-loader!url-loader"
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: [
    new Html({
      template: "src/public/index.html",
      favicon: "src/public/favicon.ico"
    }),
    IconAssetPlugin,
    new CleanWebpackPlugin()
  ],

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
