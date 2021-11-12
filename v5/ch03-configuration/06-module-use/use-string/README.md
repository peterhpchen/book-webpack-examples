# use-string

## loader/index.js

```js
module.exports = function (source) {
  const options = this.getOptions();
  console.log(`${(options && options.name) || 'this'} loader execution`);
  return source;
};
```

自定義的 loader ，輸出對應的設定 `name` ，以便觀察 loader 的使用情形。

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

引入 `src/style.css` ，並 append 到 HTML 中。

## webpack.config.js

```js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'css-loader',
      },
      {
        test: /\.js$/,
        use: path.resolve(__dirname, 'loader'),
      },
    ],
  },
};
```

`.css` 的 loader 使用名稱設定 `css-loader` ， `.js` 的 loader 使用路徑設定目錄 `loader` 中自定義的 loader 。

## 結果

```bash
this loader execution
this loader execution
this loader execution
asset main.js 1.52 KiB [compared for emit] [minimized] (name: main)
runtime modules 663 bytes 3 modules
cacheable modules 3.04 KiB
  modules by path ./src/ 736 bytes
    ./src/index.js 277 bytes [built] [code generated]
    ./src/style.css 459 bytes [built] [code generated]
  modules by path ./node_modules/css-loader/dist/runtime/*.js 2.33 KiB
    ./node_modules/css-loader/dist/runtime/noSourceMaps.js 64 bytes [built] [code generated]
    ./node_modules/css-loader/dist/runtime/api.js 2.26 KiB [built] [code generated]
```

因為 `src/style.css` 觸發了 `css-loader` ，藉此引入了兩個 `.js` 檔案，因此加上原本的 `index.js` ，所以 `this loader execution` 輸出了三次。
