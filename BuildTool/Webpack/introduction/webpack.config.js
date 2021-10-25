const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = (file) => path.resolve(__dirname, file);

module.exports = {
  // mode: "production",
  entry: "./src/main.js",
  output: {
    path: resolve("dist"),
    filename: "[name].[hash].js",
  },
  resolve: {
    alias: {
      "@": resolve("src/"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve("public/index.html"),
      favicon: resolve("public/favicon.svg"),
    }),
  ],
};
