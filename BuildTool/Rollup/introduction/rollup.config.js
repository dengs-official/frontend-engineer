/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "umd",
    name: "RollupModule",
  },
};

export default config;
