const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge").merge;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const resolve = (file) => path.resolve(file);

module.exports = (env, argv) => {
  const config = argv.mode === "production" ? prodConfig : devConfig;
  return merge(baseConfig(env, argv), config);
};
const baseConfig = (env, argv) => {
  const prodMode = argv.mode === "production";
  return {
    entry: "./src/index.js",
    output: {
      path: resolve("dist"),
      filename: "js/[name].[fullhash].js",
      clean: true,
    },
    target: "web",
    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        "@": resolve("src"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)/,
          include: /src/,
          loader: "babel-loader",
        },
        {
          test: /\.(sa|sc|c)ss/,
          include: /src/,
          use: [prodMode ? MiniCssExtractPlugin.loader : "style-loader", "css-loader", "postcss-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
          generator: {
            filename: "img/[name].[hash].[ext][query]",
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve("public/index.html"),
        inject: true,
      }),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "all",
          },
        },
      },
    },
  };
};

const devConfig = {
  mode: "development",
  devServer: {
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
};
const prodConfig = {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[fullhash].css",
    }),
    new BundleAnalyzerPlugin({ analyzerMode: "static", openAnalyzer: false }),
  ],
};
