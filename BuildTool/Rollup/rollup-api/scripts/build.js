const rollup = require("rollup");

const { inputOptions, outputOptions } = require("../config/rollup.config.base");

async function build() {
  const bundle = await rollup.rollup(inputOptions);

  // const { output } = await bundle.generate(outputOptions);
  await bundle.write(outputOptions);
  await bundle.close();
}

build();
