// ch06-inside/03-write-a-loader/single/src/index.js
module.exports = function (source) {
  return `// Hello, loader!
${source}`;
};
