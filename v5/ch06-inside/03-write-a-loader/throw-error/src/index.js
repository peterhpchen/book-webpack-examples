// ch06-inside/03-write-a-loader/throw-error/src/index.js
module.exports = function (source) {
  throw new Error('Error');
  return `// Hello, loader!
${source}`;
};
