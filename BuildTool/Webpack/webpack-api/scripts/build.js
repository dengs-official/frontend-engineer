const webpack = require("webpack");
const merge = require("webpack-merge").merge;
const baseConfig = require("../config/webpack.config.base");
const prodConfig = require("../config/webpack.config.prod");

const config = merge(baseConfig, prodConfig);
const compiler = webpack(config);

compiler.run((err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }
  const info = stats.toJson();
  if (stats.hasErrors()) {
    console.error(info.errors);
  }
  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }

  compiler.close((closeErr) => {});
});
