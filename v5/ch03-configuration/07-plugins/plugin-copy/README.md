# plugin-copy

## webpack.config.js

```js
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public' }],
    }),
  ],
};
```

設定 `copy-webpack-plugin` ，並設定將 `public` 目錄的資源複製至輸出目錄 `dist` 中。

## 結果

```bash
asset index.css 52 bytes [emitted] [from: public/index.css] [copied]
asset main.js 0 bytes [emitted] [minimized] (name: main)
./src/index.js 1 bytes [built] [code generated]
```

`index.css` 由 `public/index.css` 被 `copy-webpack-plugin` 給複製到輸出目錄下。
