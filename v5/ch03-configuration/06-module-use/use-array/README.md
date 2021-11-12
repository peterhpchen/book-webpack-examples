# use-array

## loader/index.js

```js
const { getOptions } = require('loader-utils');

module.exports = function (source) {
  console.log(`${getOptions(this).name} loader execution`);
  return source;
};
```

自定義 loader ，輸出選項的 `name` ，來檢視使用的 loader 。

## src/index.js

```js
import './style.scss';
```

引入 `src/style.scss` 。

## webpack.config.js

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          (info) => console.log(info.issuer) || 'sass-loader',
        ],
      },
    ],
  },
};
```

使用陣列設定 `module.rules.use` ，為單個條件設定多個 loader 所組成的處理程序，陣列內可以使用名稱、物件或是函式設定。

## webpack.config.js 建置結果

```bash
/Users/PeterChen/Documents/code/book-webpack-examples/v5/ch03-configuration/06-module-use/use-array/src/index.js
/Users/PeterChen/Documents/code/book-webpack-examples/v5/ch03-configuration/06-module-use/use-array/src/style.scss
asset main.js 3.98 KiB [emitted] [minimized] (name: main)
runtime modules 663 bytes 3 modules
orphan modules 1.19 KiB [orphan] 1 module
modules by path ./node_modules/ 8.07 KiB
  modules by path ./node_modules/style-loader/dist/runtime/*.js 5.75 KiB 6 modules
  modules by path ./node_modules/css-loader/dist/runtime/*.js 2.33 KiB
    ./node_modules/css-loader/dist/runtime/noSourceMaps.js 64 bytes [built] [code generated]
    ./node_modules/css-loader/dist/runtime/api.js 2.26 KiB [built] [code generated]
modules by path ./src/ 1.63 KiB
  ./src/index.js + 1 modules 1.22 KiB [built] [code generated]
  ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss 426 bytes [built] [code generated]
```

## webpack.config.multiple-rules.js

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: 'style-loader',
      },
      {
        test: /\.scss$/,
        use: {
          loader: 'css-loader',
        },
      },
      {
        test: /\.scss$/,
        use: (info) => console.log(info.issuer) || 'sass-loader',
      },
    ],
  },
};
```

將每個 loader 設置不同規則，與陣列設定多個規則的效果相同。

## webpack.config.multiple-rules.js 建置結果

```bash
/Users/PeterChen/Documents/code/book-webpack-examples/v5/ch03-configuration/06-module-use/use-array/src/index.js
/Users/PeterChen/Documents/code/book-webpack-examples/v5/ch03-configuration/06-module-use/use-array/src/style.scss
asset main.js 3.98 KiB [emitted] [minimized] (name: main)
runtime modules 663 bytes 3 modules
orphan modules 1.19 KiB [orphan] 1 module
modules by path ./node_modules/ 8.07 KiB
  modules by path ./node_modules/style-loader/dist/runtime/*.js 5.75 KiB 6 modules
  modules by path ./node_modules/css-loader/dist/runtime/*.js 2.33 KiB
    ./node_modules/css-loader/dist/runtime/noSourceMaps.js 64 bytes [built] [code generated]
    ./node_modules/css-loader/dist/runtime/api.js 2.26 KiB [built] [code generated]
modules by path ./src/ 1.63 KiB
  ./src/index.js + 1 modules 1.22 KiB [built] [code generated]
  ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss 426 bytes [built] [code generated]
```
