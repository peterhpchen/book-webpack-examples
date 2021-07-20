// ch06-inside/03-inside-loader/get-options/src/index.js
module.exports = function (source) {
  const { comment } = this.getOptions();
  return comment
    ? `// ${comment}
${source}`
    : source;
};
