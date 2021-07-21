// ch06-inside/04-inside-plugin/hooks/src/index.js
class HooksPlugin {
  apply(compiler) {
    console.log('Compiler Hooks', Object.keys(compiler.hooks));
    compiler.hooks.compilation.tap('HooksPlugin', (compilation) => {
      console.log('Compilation Hooks', Object.keys(compilation.hooks));
    });
    compiler.hooks.contextModuleFactory.tap(
      'HooksPlugin',
      (contextModuleFactory) => {
        console.log(
          'ContextModuleFactory Hooks',
          Object.keys(contextModuleFactory.hooks)
        );
      }
    );
    compiler.hooks.normalModuleFactory.tap(
      'HooksPlugin',
      (normalModuleFactory) => {
        console.log(
          'NormalModuleFactory Hooks',
          Object.keys(normalModuleFactory.hooks)
        );
        normalModuleFactory.hooks.parser
          .for('javascript/auto')
          .tap('HooksPlugin', (parser) => {
            console.log('Parser Hooks', Object.keys(parser.hooks));
          });
      }
    );
  }
}

module.exports = HooksPlugin;
