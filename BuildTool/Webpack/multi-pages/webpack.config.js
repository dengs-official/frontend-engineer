const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const resolve = (file) => path.resolve(__dirname, file);

module.exports = (env, argv) => {
  const prodMode = argv.mode === "production";
  return {
    entry: {
      index: "./src/index.js",
      home: "./src/home.js",
      about: "./src/about.js",
    },
    output: {
      path: resolve("dist"),
      filename: (pathData) =>
        ["home", "index", "about"].includes(pathData.chunk.name) ? "[name]/[name].[fullhash].js" : "js/[name].js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)/i,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve("public/index.html"),
        filename: "index.html",
        chunks: ["index"],
      }),
      new HtmlWebpackPlugin({
        template: resolve("public/index.html"),
        filename: "home.html",
        chunks: ["home"],
      }),
      new HtmlWebpackPlugin({
        template: resolve("public/index.html"),
        filename: "about.html",
        chunks: ["about"],
      }),
      new BundleAnalyzerPlugin({ analyzerMode: "static", openAnalyzer: prodMode }),
    ],
    optimization: {
      runtimeChunk: "single",
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
