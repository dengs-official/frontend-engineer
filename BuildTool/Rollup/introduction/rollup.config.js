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
  },
  {
    // multiple
    input: "src/multiple.js",
    output: {
      dir: "dist",
      format: "es",
    },
  },
];

export default config;
