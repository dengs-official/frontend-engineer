const path = require("path");
const merge = require("webpack-merge").merge;
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const resolve = (file) => path.resolve(__dirname, file);

// module.exports = {
module.exports = (env, argv) => {
  const config = argv.mode === "development" ? devConfig : prodConfig;
  return merge(baseConfig(env, argv), config);
};

const baseConfig = (env, argv) => {
  const devMode = argv.mode === "development";
  return {
    entry: "./src/main.js",
    output: {
      path: resolve("dist"),
      filename: "js/[name].[fullhash].js",
    },
    resolve: {
      alias: {
        "@": resolve("src/"),
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
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
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[fullhash].css",
    }),
  ],
};
