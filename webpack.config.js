const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

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
  entry: "./index.jsx",
  output: {
    filename: "[contenthash].js",
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  module: {
    rules: [babelLoader, cssLoader],
  },
  plugins: [htmlPlugin, envPlugin],
  optimization: {
    minimize: true,
  },
};
