// ch06-inside/04-inside-plugin/done/src/index.js
class DonePlugin {
  apply(compiler) {
    compiler.hooks.done.tap('DonePlugin', (stats) => {
      console.log('Hello, world');
    });

    compiler.hooks.done.tapAsync('DonePlugin', (stats, callback) => {
      setTimeout(() => {
        console.log('Hello, world');
        callback();
      }, 1000);
    });

    compiler.hooks.done.tapPromise('DonePlugin', (stats) => {
      return new Promise((resolve) =>
        setTimeout(() => {
          console.log('Hello, world');
          resolve();
        }, 1000)
      );
    });

    compiler.hooks.done.tapPromise('DonePlugin', async (stats) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Hello, world');
    });
  }
}

module.exports = DonePlugin;
