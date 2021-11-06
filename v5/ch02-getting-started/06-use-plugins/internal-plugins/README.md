# internal-plugins

## webpack.config.js

```js
// ch02-getting-started/06-use-plugins/internal-plugins/webpack.config.js
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
  ],
};
```

使用 webpack 內建的 `DefinePlugin` 定義變數 `process.env.NODE_ENV` 為 `production` 。

## src/index.js

```js
console.log(`Current ENV: ${process.env.NODE_ENV}`);
```

用 `console.log()` 輸出 `process.env.NODE_ENV` 的值。

## 結果

### dist/main.js

```js
console.log('Current ENV: production');
```

變數 `process.env.NODE_ENV` 的值被賦予為 `production` ，因此 bundle 內容會變為此字串。
