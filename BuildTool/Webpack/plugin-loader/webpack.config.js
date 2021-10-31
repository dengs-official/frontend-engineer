const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const r = (r) => path.resolve(__dirname, r);
module.exports = (env, argv) => {
  return {
    mode: "production",
    entry: "./src/index.js",
    module: {
      rules: [
        {
          test: /\.css/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: r("webpack/loader/pxToRemLoader.js"),
              options: {
                rootValue: 192,
              },
            },
          ],
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin({ template: r("public/index.html") })],
  };
};
