# rules-exclude

## loader/index.js

```js
module.exports = function (source) {
  console.log(`${this.getOptions().rule} - ${this.resourcePath}`);
  return source;
};
```

自定義的 webpack loader ，它會輸出觸發此 loader 的規則與使用此 loader 的模組路徑，以更方便地學習 loader 的配置方式。

## src/index.js

```js
import './style.css';

console.log('index');
```

引入 `src/style.css` 。

## webpack.config.js

```js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        exclude: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, 'loader'),
            options: { rule: 'exclude: /.js$/' },
          },
        ],
      },
    ],
  },
};
```

使用 `module.rules.exclude` 將 `.js` 結尾的模組排除於 loader 處理的範圍外。

## 結果

```bash
exclude: /.js$/ - /Users/PeterChen/Documents/code/book-webpack-examples/v5/ch03-configuration/05-module/rules-exclude/src/style.css
```

在引入 `src/index.js` 時，因為 `module.exclude` 使其被排除，沒有被 loader 所處理，但是其引入的 `src/style.css` 則觸發了 loader 並輸出資訊。
