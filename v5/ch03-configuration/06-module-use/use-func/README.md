# use-func

## loader/index.js

```js
module.exports = function (source) {
  const params = new URLSearchParams(this.resourceQuery.slice(1));
  if (params.has('name')) {
    return source.replace("';", ` ${params.get('name')}'`);
  }
  return source;
};
```

自定義 loader ，如果引入時帶有參數 `name` ，則將其接於輸出的後面。

## src/index.js

```js
import hello from './hello.js?name=webpack';

console.log(hello);
```

引入 `src/hello.js` ，並帶上參數 `name` 。

## src/hello.js

```js
export default 'Hello';
```

輸出 `Hello` 字串。

## webpack.config.js

```js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: (info) => console.log(info) || [path.resolve(__dirname, 'loader')],
      },
    ],
  },
};
```

`.js` 使用自定義的 loader ，以函式的形式定義，並將資訊 `info` 輸出在 console 上。

## 結果

```bash
{
  resource: '/Users/PeterChen/Documents/code/book-webpack-examples/v5/ch03-configuration/06-module-use/use-func/src/index.js',
  realResource: '/Users/PeterChen/Documents/code/book-webpack-examples/v5/ch03-configuration/06-module-use/use-func/src/index.js',
  resourceQuery: '',
  resourceFragment: '',
  scheme: undefined,
  assertions: undefined,
  mimetype: '',
  dependency: 'esm',
  descriptionData: {
    scripts: { build: 'webpack' },
    devDependencies: { webpack: '^5.64.0', 'webpack-cli': '^4.9.1' }
  },
  issuer: '',
  compiler: undefined,
  issuerLayer: ''
}
{
  resource: '/Users/PeterChen/Documents/code/book-webpack-examples/v5/ch03-configuration/06-module-use/use-func/src/hello.js',
  realResource: '/Users/PeterChen/Documents/code/book-webpack-examples/v5/ch03-configuration/06-module-use/use-func/src/hello.js',
  resourceQuery: '?name=webpack',
  resourceFragment: '',
  scheme: undefined,
  assertions: undefined,
  mimetype: '',
  dependency: 'esm',
  descriptionData: {
    scripts: { build: 'webpack' },
    devDependencies: { webpack: '^5.64.0', 'webpack-cli': '^4.9.1' }
  },
  issuer: '/Users/PeterChen/Documents/code/book-webpack-examples/v5/ch03-configuration/06-module-use/use-func/src/index.js',
  compiler: undefined,
  issuerLayer: ''
}
asset main.js 52 bytes [emitted] [minimized] (name: main)
orphan modules 89 bytes [orphan] 1 module
./src/index.js + 1 modules 213 bytes [built] [code generated]
```

因為 `src/index.js` 與 `src/hello.js` 都為 `.js` 的範圍，因此各輸出了一次資訊。

### dist/main.js

<!-- prettier-ignore -->
```js
(()=>{"use strict";console.log("Hello webpack")})();
```

藉由自定義的 loader ，將引入 `src/hello.js` 時的 `name` 參數接到原本輸出的 `Hello` 字串之後。
