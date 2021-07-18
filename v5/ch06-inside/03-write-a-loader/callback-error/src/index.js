// ch06-inside/03-write-a-loader/callback-error/src/index.js
module.exports = function (source) {
  const callback = this.async();
  setTimeout(() => {
    callback(
      new Error('Error'),
      `// Hello, loader!
${source}`
    );
  }, 1000);
};
