# multiple-plugins

## webpack.config.js

```js
// ch02-getting-started/06-use-plugins/multiple-plugins/webpack.config.js
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CompressionWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }],
    }),
  ],
};
```

同時設定 `compression-webpack-plugin` 與 `copy-webpack-plugin` 複數個 plugin 。

## 結果

`index.html` 被 `copy-webpack-plugin` 複製至 `dist` 目錄中，並且 `main.js` 因為 `compression-webpack-plugin` 的作用產生了壓縮版本的 `main.js.gz` 。
