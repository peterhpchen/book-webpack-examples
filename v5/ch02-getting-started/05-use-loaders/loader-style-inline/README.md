# loader-style-inline

## src/index.js

```js
// ch02-getting-started/05-use-loaders/loader-style-inline/src/index.js
import 'style-loader!css-loader!./style.css';
```

藉由 `css-loader` 載入 `src/style.css` ，並用 `style-loader` 嵌入至 HTML 中。

## 結果

```bash
asset main.js 4 KiB [emitted] [minimized] (name: main)
runtime modules 663 bytes 3 modules
orphan modules 1.11 KiB [orphan] 1 module
modules by path ./node_modules/ 8.07 KiB
  modules by path ./node_modules/style-loader/dist/runtime/*.js 5.75 KiB 6 modules
  modules by path ./node_modules/css-loader/dist/runtime/*.js 2.33 KiB
    ./node_modules/css-loader/dist/runtime/noSourceMaps.js 64 bytes [built] [code generated]
    ./node_modules/css-loader/dist/runtime/api.js 2.26 KiB [built] [code generated]
modules by path ./src/ 1.67 KiB
  ./src/index.js + 1 modules 1.23 KiB [built] [code generated]
  ./node_modules/css-loader/dist/cjs.js!./src/style.css 454 bytes [built] [code generated]
```

Webpack 將 `src/style.css` 以 `css-loader` 讀入，並將 `style-loader` 一起包入來嵌入所載入的樣式。
