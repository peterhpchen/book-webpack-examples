module.exports = function (source) {
  const params = new URLSearchParams(this.resourceQuery.slice(1));
  if (params.has('name')) {
    return source.replace("';", ` ${params.get('name')}'`);
  }
  return source;
};
