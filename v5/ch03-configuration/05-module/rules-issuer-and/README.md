# rules-issuer-and

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
  |- style.css
|- /app
  |- index.js
  |- style.css
```

`src/index.js` 引入了 `src/style.css` ，而 `app/index.js` 引入了 `app/style.css` 。

## webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
    app: './app/index.js',
  },
  module: {
    rules: [
      {
        issuer: {
          and: [path.resolve(__dirname, 'src'), /\.js$/],
        },
        use: [
          {
            loader: path.resolve(__dirname, 'loader'),
            options: { rule: 'issuer.and' },
          },
        ],
      },
    ],
  },
};
```

使用 `issuer` 設定引用者的過濾條件是要在 `src` 目錄下，並且是 `.js` 結尾的模組。

## 結果

```bash
issuer.and - /Users/PeterChen/Documents/code/book-webpack-examples/v5/ch03-configuration/05-module/rules-issuer-and/src/style.css
```

原本有下面四個模組：

- `src/index.js`
- `src/style.css`
- `app/index.js`
- `app/style.css`

設定的條件為 `issuer` ，這是有引用者才會符合的條件，因此 `src/index.js` 與 `app/index.js` 因為沒有引用者而被排除。

另外由於 `issuer` 設定要是在 `src` 目錄下的 `.js` 結尾檔案，因此 `app/style.css` 也被排除。

所以只剩下 `src/style.css` 這個模組被 loader 所處理並輸出訊息。
