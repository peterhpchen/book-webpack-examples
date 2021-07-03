module.exports = function (source) {
  const options = this.getOptions();
  console.log(`${(options && options.name) || 'this'} loader execution`);
  return source;
};
