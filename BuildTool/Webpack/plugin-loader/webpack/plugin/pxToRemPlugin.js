const path = require("path");
const { sources } = require("webpack");

class PxToRemPlugin {
  constructor({ rootValue }) {
    this.rootValue = rootValue;
  }
  apply(compiler) {
    compiler.hooks.environment.tap("PxToRemPlugin", () => {});
    compiler.hooks.thisCompilation.tap("PxToRemPlugin", (compilation, params) => {
      compilation.hooks.processAssets.tap("PxToRemPlugin", (assets) => {
        for (const asset in assets) {
          if ([".js", ".css"].includes(path.extname(asset))) {
            compilation.updateAsset(asset, (source) => {
              return new sources.RawSource(
                source.source().replace(/([0-9]+)px/g, (val) => `${parseFloat(val) / this.rootValue}rem`)
              );
            });
          }
        }
      });
    });
  }
}

module.exports = PxToRemPlugin;
