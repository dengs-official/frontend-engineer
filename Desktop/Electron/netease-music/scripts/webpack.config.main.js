const path = require("path");
const merge = require("webpack-merge").merge;

const baseConfig = require("./webpack.config.base");

const r = (file) => path.resolve(__dirname, "..", file);

const isEnvProduction = process.env.NODE_ENV === "production";
const isEnvDevelopment = process.env.NODE_ENV === "development";

const mainDevConfig = {};
const mainProdConfig = {};
module.exports = merge(
  baseConfig,
  {
    entry: {
      main: r("src/main/index.ts"),
      preload: r("src/main/preload.ts"),
    },
    output: {
      path: r("dist/main"),
    },
    target: "electron-main",
  },
  isEnvDevelopment ? mainDevConfig : mainProdConfig
);
