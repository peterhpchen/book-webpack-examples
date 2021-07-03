// ch03-configuration/06-module-use/use-obj/loader/index.js
module.exports = function (source) {
  console.log(`${this.getOptions().name} loader execution`);
  return source;
};
