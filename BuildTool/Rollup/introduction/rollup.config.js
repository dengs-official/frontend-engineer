import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

const plugins = [babel({ babelHelpers: "bundled" }), terser()];

/**
 * @type {import('rollup').RollupOptions}
 */
const config = [
  {
    // single
    input: "src/single.js",
    output: {
      file: "dist/single.js",
      format: "umd",
      name: "Single",
    },
    plugins,
  },
  {
    // multiple
    input: "src/multiple.js",
    output: {
      dir: "dist",
      format: "es",
    },
    plugins,
  },
];

export default config;
