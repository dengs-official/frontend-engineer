const rollup = require("rollup");
const { inputOptions, outputOptions } = require("../config/rollup.config.base");
const watchOptions = require("../config/rollup.config.watch");

const watcher = rollup.watch({ ...inputOptions, output: [outputOptions], watch: watchOptions });
