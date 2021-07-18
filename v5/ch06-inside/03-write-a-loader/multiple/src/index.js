// ch06-inside/03-write-a-loader/single/src/index.js
module.exports = function (source, map, meta) {
  const err = null;
  const content = meta
    ? `// ${meta}
${source}`
    : source;
  const sourceMap = null;
  const metaData = 'Hello, loader!';

  this.callback(err, content, sourceMap, metaData);
  return;
};
