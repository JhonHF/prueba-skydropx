const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");

const babelLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  resolve: {
    extensions: [".js", ".jsx"],
  },
  use: {
    loader: "babel-loader",
  },
};

const cssLoader = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./index.html",
  filename: "./index.html",
  minify: "auto",
});

const envPlugin = new Dotenv();

module.exports = {
  entry: path.join(__dirname, "src/index.jsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[contenthash].js",
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [babelLoader, cssLoader],
  },
  plugins: [htmlPlugin, envPlugin],
  optimization: {
    minimize: true,
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
    open: true,
  },
};
