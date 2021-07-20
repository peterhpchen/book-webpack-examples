// ch06-inside/03-inside-loader/async/src/index.js
module.exports = function (source) {
  const callback = this.async();
  setTimeout(() => {
    callback(
      null,
      `// Hello, loader!
${source}`
    );
  }, 1000);
};
