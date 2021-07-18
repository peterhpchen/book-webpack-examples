// ch06-inside/03-write-a-loader/async/src/index.js
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
