# node-api

## build.js

```js
// ch03-configuration/01-configuration-object/node-api/build.js
const webpack = require('webpack');
const path = require('path');

webpack(
  {
    // Configuration Object
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index2.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
    },
  },
  (err, stats) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(stats.toString({ colors: true }));
  }
);
```

使用 webpack 的 Node.js API 叫用 webpack 執行建置，並且設定配置物件與客製輸出資訊。

## 結果

由於未使用 webpack 的 CLI ，因此不需要安裝 `webpack-cli` 。
