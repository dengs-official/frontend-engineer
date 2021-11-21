const path = require("path");
const merge = require("webpack-merge").merge;
const HtmlWebpackPlugin = require("html-webpack-plugin");

const r = (file) => path.resolve(__dirname, file);

const isEnvProduction = process.env.NODE_ENV === "production";
const isEnvDevelopment = process.env.NODE_ENV === "development";

const commonConfig = {
  output: {
    filename: "[name].js",
    clean: true,
  },
  devtool: isEnvDevelopment ? "source-map" : false,
  mode: isEnvDevelopment ? "development" : "production",
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

const mainConfig = merge(commonConfig, {
  entry: {
    main: r("src/main/index.ts"),
    preload: r("src/main/preload.ts"),
  },
  output: {
    path: r("dist/main"),
  },
  target: "electron-main",
});

const rendererConfig = merge(commonConfig, {
  entry: r("src/renderer/index.ts"),
  output: {
    path: r("dist/renderer"),
  },
  target: "electron-renderer",
  plugins: [
    new HtmlWebpackPlugin({
      template: r("src/renderer/index.html"),
    }),
  ],
});

module.exports = [mainConfig, rendererConfig];
