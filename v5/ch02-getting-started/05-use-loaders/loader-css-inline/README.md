# loader-css-inline

## src/index.js

```js
// ch02-getting-started/05-use-loaders/loader-css-inline/src/index.js
import css from 'css-loader!./style.css';

function style(cssString) {
  const element = document.createElement('style');

  element.innerHTML = cssString;

  return element;
}

document.head.appendChild(style(css.toString()));
```

使用 `css-loader` 引入 `src/style.css` 並 append 至 `head` 元素中。

## 結果

```bash
> webpack

asset main.js 1.58 KiB [emitted] [minimized] (name: main)
runtime modules 663 bytes 3 modules
cacheable modules 3.13 KiB
  modules by path ./src/ 827 bytes
    ./src/index.js 298 bytes [built] [code generated]
    ./node_modules/css-loader/dist/cjs.js!./src/style.css 529 bytes [built] [code generated]
  modules by path ./node_modules/css-loader/dist/runtime/*.js 2.33 KiB
    ./node_modules/css-loader/dist/runtime/noSourceMaps.js 64 bytes [built] [code generated]
    ./node_modules/css-loader/dist/runtime/api.js 2.26 KiB [built] [code generated]
```

可以看到 `src/style.css` 因為 `css-loader` 的幫助而被包入 bundle 中。
