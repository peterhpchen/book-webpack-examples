// ch06-inside/03-inside-loader/pitching-args/src/index.js
module.exports = function (source) {
  return source;
};

module.exports.pitch = function (remainingRequest, precedingRequest, data) {
  const { log } = this.getOptions();
  if (log) {
    console.log(`remainingRequest: ${remainingRequest}`);
    console.log(`precedingRequest: ${precedingRequest}`);
    console.log(`data: ${JSON.stringify(data)}`);
  }
};
