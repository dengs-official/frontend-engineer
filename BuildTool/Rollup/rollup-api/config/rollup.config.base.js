const path = require("path");

const r = (r) => path.resolve(__dirname, "../", r);

exports.inputOptions = {
  input: r("src/main.js"),
  plugins: [],
};

exports.outputOptions = {
  file: r("dist/bundle.js"),
  format: "umd",
};
