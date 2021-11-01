const webpack = require("webpack");
const merge = require("webpack-merge").merge;

const baseConfig = require("../config/webpack.config.base");
const devConfig = require("../config/webpack.config.dev");

const compiler = webpack(merge(baseConfig, devConfig));

compiler.watch({}, (err, stats) => {
  console.log(stats);
});
