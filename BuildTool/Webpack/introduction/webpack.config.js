const path = require("path");
const merge = require("webpack-merge").merge;
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = (file) => path.resolve(__dirname, file);

// module.exports = {
module.exports = (env, argv) => {
  const config = argv.mode === "development" ? devConfig : prodConfig;
  return merge(baseConfig(env, argv), config);
};

const baseConfig = (env, argv) => {
  return {
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
      new HtmlWebpackPlugin({
        template: resolve("public/index.html"),
        favicon: resolve("public/favicon.svg"),
      }),
    ],
  };
};

const devConfig = {
  mode: "development",
};

const prodConfig = {
  mode: "production",
  plugins: [new CleanWebpackPlugin()],
};
