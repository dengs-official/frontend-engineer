const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const r = (r) => path.resolve(__dirname, "../", r);

module.exports = {
  entry: r("src/index.js"),
  output: {
    path: r("dist"),
    filename: "[name].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: r("public/index.html"),
    }),
  ],
};
