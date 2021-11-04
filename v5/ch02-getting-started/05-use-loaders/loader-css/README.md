# loader-css

## webpack.config.demo.js

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
    ],
  },
};
```

使用 `module.rules` 設置 `.css` 檔案要經由 `css-loader` 處理。

## src/index.js

```js
import css from './style.css';

function style(cssString) {
  const element = document.createElement('style');

  element.innerHTML = cssString;

  return element;
}

document.head.appendChild(style(css.toString()));
```

引入 `src/style.css` 並 append 至 `head` 元素中。

## 結果

```bash
> webpack --config webpack.config.demo.js

asset main.js 1.51 KiB [emitted] [minimized] (name: main)
runtime modules 663 bytes 3 modules
cacheable modules 2.98 KiB
  modules by path ./src/ 671 bytes
    ./src/index.js 217 bytes [built] [code generated]
    ./src/style.css 454 bytes [built] [code generated]
  modules by path ./node_modules/css-loader/dist/runtime/*.js 2.33 KiB
    ./node_modules/css-loader/dist/runtime/noSourceMaps.js 64 bytes [built] [code generated]
    ./node_modules/css-loader/dist/runtime/api.js 2.26 KiB [built] [code generated]
```

可以看到 `src/style.css` 因為 `css-loader` 的幫助而被包入 bundle 中。
