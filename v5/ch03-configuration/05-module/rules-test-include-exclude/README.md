# rule-test-include-exclude

## loader/index.js

```js
module.exports = function (source) {
  console.log(`${this.getOptions().rule} - ${this.resourcePath}`);
  return source;
};
```

自定義的 webpack loader ，它會輸出觸發此 loader 的規則與使用此 loader 的模組路徑，以更方便地學習 loader 的配置方式。

## 專案結構

```plaintext
root
|- /src
  |- index.js
  |- /exclude
    |- index.js
|- /app
  |- index.js
  |- /exclude
    |- index.js
|- /other
  |- index.js
  |- /exclude
    |- index.js
```

`src` 、 `app` 、 `other` 的 `index.js` 都會引入其目錄下的 `exclude` 模組。

## webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
    app: './app/index.js',
    other: './other/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src'), (path) => path.match(/app/)],
        exclude: path.resolve(__dirname, 'app', 'exclude'),
        use: [
          {
            loader: path.resolve(__dirname, 'loader'),
            options: { rule: 'test, include and exclude' },
          },
        ],
      },
    ],
  },
};
```

使用三層條件：

- `test` ：包含所有 `.js` 結尾的檔案。
- `include` ：包含 `src` 目錄與 `app` 目錄。
- `exclude` ：排除 `app/exclude` 目錄。

## 結果

```bash
test, include and exclude - /Users/PeterChen/Documents/code/book-webpack-examples/v5/ch03-configuration/05-module/rules-test-include-exclude/src/index.js
test, include and exclude - /Users/PeterChen/Documents/code/book-webpack-examples/v5/ch03-configuration/05-module/rules-test-include-exclude/app/index.js
test, include and exclude - /Users/PeterChen/Documents/code/book-webpack-examples/v5/ch03-configuration/05-module/rules-test-include-exclude/src/exclude/index.js
```

現在有六個模組：

- `src/index.js`
- `src/exclude/index.js`
- `app/index.js`
- `app/exclude/index.js`
- `other/index.js`
- `other/exclude/index.js`

過濾過程如下：

- 經過 `test` 的過濾後，六個因為都是 `.js` 的檔案，所以都符合條件。
- 經過 `include` 的過濾後，因為只有包含 `src` 與 `app` 目錄，因此 `other` 下的模組都被排除。
- 經過 `exclude` 的過濾後，把 `app/exclude` 目錄中的模組排除。

最後剩餘三個模組會被 loader 作用並輸出訊息：

- `src/index.js`
- `src/exclude/index.js`
- `app/index.js`
