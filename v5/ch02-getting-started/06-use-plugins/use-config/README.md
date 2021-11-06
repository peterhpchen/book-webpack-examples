# use-config

## webpack.config.js

```js
// ch02-getting-started/06-use-plugins/use-config/webpack.config.js
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  plugins: [
    // config plugin
    new CompressionPlugin(), // new plugin
  ],
};
```

使用 `compression-webpack-plugin` 產生 bundle 檔案的壓縮。

## 結果

建置後，會看到 `dist` 目錄中有個 `main.js.gz` 的壓縮檔，如果伺服器支援讀取壓縮檔（以 `http-server` 為例，加上 `-g` 參數）的話，就可以以此減少傳輸的流量。
