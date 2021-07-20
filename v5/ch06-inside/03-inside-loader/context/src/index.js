// ch06-inside/03-inside-loader/context/src/index.js
module.exports = function (source) {
  return `// ${this.context}
${source}`;
};
