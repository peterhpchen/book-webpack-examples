# config-file

## webpack.config.js

```js
// ch03-configuration/01-configuration-object/config-file/webpack.config.demo.js
const path = require('path');

module.exports = {
  // Configuration Object
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index2.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
  },
};
```

使用配置檔內的配置物件中的設定來控制 webpack 的建置，這裡用屬性 `mode` 設定模式， `entry` 設定起始模組， `output` 設定輸出。
