// ch06-inside/03-write-a-loader/pitching-data/src/index.js
module.exports = function (source) {
  const { name } = this.getOptions();
  console.log(`${name}-loader normal execution. Value: ${this.data.value}`);
  return source;
};

module.exports.pitch = function (remainingRequest, precedingRequest, data) {
  const { name } = this.getOptions();
  data.value = name;
  console.log(`${name}-loader \`pitching\``);
};
