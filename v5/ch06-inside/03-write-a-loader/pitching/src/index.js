// ch06-inside/03-write-a-loader/pitching/src/index.js
module.exports = function (source) {
  const { name } = this.getOptions();
  console.log(`${name}-loader normal execution`);
  return source;
};

module.exports.pitch = function (remainingRequest, precedingRequest, data) {
  const { name } = this.getOptions();
  console.log(`${name}-loader \`pitching\``);
};
