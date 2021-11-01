const path = require("path");
const webpack = require("webpack");
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
      assetModuleFilename: "assets/[name].[hash][ext][query]",
    },
    resolve: {
      alias: {
        "@": resolve("src/"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
            "sass-loader",
            "postcss-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve("public/index.html"),
        favicon: resolve("public/favicon.svg"),
      }),
      new CleanWebpackPlugin(),
    ],
  };
};

const devConfig = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

const prodConfig = {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[fullhash].css",
    }),
  ],
};
