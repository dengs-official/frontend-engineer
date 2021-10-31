function loader(source) {
  const options = this.getOptions();
  console.log(options);
  return source.replace(/([0-9]+)px/g, (val) => `${parseFloat(val) / options.rootValue}rem`);
}

loader.pitch = function (remainingRequest, precedingRequest, data) {};

module.exports = loader;
