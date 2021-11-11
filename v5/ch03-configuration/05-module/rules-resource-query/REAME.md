# rules-resource-query

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
import './style.css?yoho';

console.log('index');
```

引入 `src/style.css` ，並帶參數 `yoho` 。

## webpack.config.js

```js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        resourceQuery: (query) => query.match(/yo/),
        use: [
          {
            loader: path.resolve(__dirname, 'loader'),
            options: { rule: 'resourceQuery: (query) => query.match(/yo/)' },
          },
        ],
      },
    ],
  },
};
```

使用 `resourceQuery` 過濾特定參數的引入，並將其給予 loader 做處理。

## 結果

```bash
resourceQuery: (query) => query.match(/yo/) - /Users/PeterChen/Documents/code/book-webpack-examples/v5/ch03-configuration/05-module/rules-resource-query/src/style.css
```

引入 `src/style.css` 時因帶有 `yoho` 參數，被 loader 包入範圍並處理。
