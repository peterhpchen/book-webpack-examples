// ch06-inside/03-write-a-loader/pitching-return/src/index.js
module.exports = function (source) {
  const { name } = this.getOptions();
  console.log(`${name}-loader normal execution.`);
  return `${source}
console.log('${name}-loader');`;
};

module.exports.pitch = function (remainingRequest, precedingRequest, data) {
  const { name } = this.getOptions();
  console.log(`${name}-loader \`pitch\``);
  if (name === ' b') {
    // skip the remaining loaders
    return `// ${name}-loader
module.exports = require(${JSON.stringify('-!' + remainingRequest)});`;
  }
};
