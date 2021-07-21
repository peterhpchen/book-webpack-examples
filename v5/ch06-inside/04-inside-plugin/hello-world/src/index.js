// ch06-inside/04-inside-plugin/hello-world/src/index.js
class HelloWorldPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('HelloWorldPlugin', (stats) => {
      console.log('Hello, world');
    });
  }
}

module.exports = HelloWorldPlugin;
