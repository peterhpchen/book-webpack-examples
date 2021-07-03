module.exports = function (source) {
  console.log(`${this.getOptions().name} loader execution`);
  return source;
};
