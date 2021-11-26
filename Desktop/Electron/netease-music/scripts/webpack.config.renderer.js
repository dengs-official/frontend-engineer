const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge").merge;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const baseConfig = require("./webpack.config.base");

const r = (file) => path.resolve(__dirname, "..", file);

const isEnvProduction = process.env.NODE_ENV === "production";
const isEnvDevelopment = process.env.NODE_ENV === "development";

const rendererDevConfig = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    port: 9000,
  },
};
const renderProdConfig = {};
module.exports = merge(
  baseConfig,
  {
    entry: r("src/renderer/index.ts"),
    output: {
      path: r("dist/renderer"),
      filename: (pathData) =>
        pathData.chunk.name === "main" ? "renderer.js" : "[name].js",
    },
    // target: "electron-renderer",
    target: "web",
    plugins: [
      new HtmlWebpackPlugin({
        template: r("src/renderer/index.html"),
      }),
    ],
  },
  isEnvDevelopment ? rendererDevConfig : renderProdConfig
);
