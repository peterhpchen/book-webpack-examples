# rules-test-include

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
console.log('index');
```

## webpack.config.include.js

```js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        include: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, 'loader'),
            options: { rule: 'include' },
          },
        ],
      },
    ],
  },
};
```

使用 `module.rules,include` 設定此模組要作用在 `.js` 結尾的模組。

## webpack.config.test.js

```js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, 'loader'),
            options: { rule: 'test' },
          },
        ],
      },
    ],
  },
};
```

`module.rules.test` 與 `module.rules.include` 功能相同。

## 結果

```bash
include - /Users/PeterChen/Documents/code/book-webpack-examples/v5/ch03-configuration/05-module/rules-test-include/src/index.js
```

由 `src/index.js` 觸發了 `module.include` 的設定。
