# copy-html

## webpack.config.js

```js
// ch02-getting-started/02-first-webpack/copy-html/webpack.config.js
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, 'public') }],
    }),
  ],
};
```

在 webpack 配置檔中，使用 `copy-webpack-plugin` 將 `public` 目錄中的檔案複製到 bundle 的目標目錄 `dist` 。

## 結果

```bash
asset main.js 70.7 KiB [emitted] [minimized] (name: main) 1 related asset
asset index.html 105 bytes [emitted] [from: public/index.html] [copied]
runtime modules 1010 bytes 5 modules
cacheable modules 535 KiB
  modules by path ./node_modules/ 534 KiB
    ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
    ./node_modules/css-loader/dist/runtime/noSourceMaps.js 64 bytes [built] [code generated]
    ./node_modules/css-loader/dist/runtime/api.js 2.26 KiB [built] [code generated]
  modules by path ./src/ 912 bytes
    ./src/index.js 453 bytes [built] [code generated]
    ./node_modules/css-loader/dist/cjs.js!./src/style.css 459 bytes [built] [code generated]
```

執行建置時，因為 `copy-webpack-plugin` 的幫助， `public/index.html` 進入了建置流程中，它會被複製至 `dist` 目錄中。
