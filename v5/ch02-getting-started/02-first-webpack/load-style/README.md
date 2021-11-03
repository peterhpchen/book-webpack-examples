# load-style

## src/index.js

```js
// ch02-getting-started/02-first-webpack/load-style/src/index.js
// ...

import css from 'css-loader!./style.css';

function style(cssString) {
  const element = document.createElement('style');

  element.innerHTML = cssString;

  return element;
}

// ...

document.body.appendChild(style(css.toString()));
// ...
```

使用 `css-loader` 引入 `src/style.css` ，並將引入的樣式 append 到 `body` 元素中。

## 結果

```bash
asset main.js 70.7 KiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 1010 bytes 5 modules
cacheable modules 535 KiB
  modules by path ./node_modules/ 534 KiB
    ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
    ./node_modules/css-loader/dist/runtime/noSourceMaps.js 64 bytes [built] [code generated]
    ./node_modules/css-loader/dist/runtime/api.js 2.26 KiB [built] [code generated]
  modules by path ./src/ 977 bytes
    ./src/index.js 518 bytes [built] [code generated]
    ./node_modules/css-loader/dist/cjs.js!./src/style.css 459 bytes [built] [code generated]
```

使用 `webpack` 指令執行建置時，會使用 `css-loader` 處理樣式表 `src/style.css` 並正確的打包。
