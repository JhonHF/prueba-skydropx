const HtmlWebpackPlugin = require("html-webpack-plugin");

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

module.exports = {
  entry: "./index.js",
  output: {
    filename: "[contenthash].js",
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  module: {
    rules: [babelLoader],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./index.html",
      minify: "auto",
    }),
  ],
  optimization: {
    minimize: true,
  },
};
