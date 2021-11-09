# output-filename

## webpack.config.demo.js

```js
// ch03-configuration/03-output/output-filename/webpack.config.demo.js
const path = require('path');

module.exports = {
  output: {
    filename: 'bundle.js',
  },
};
```

設定輸出的 bundle 的檔案名稱為 `bundle.js` 。

## package.json

```json
{
  "scripts": {
    "build:argv": "webpack --output-filename bundle.js",
    "build:file": "webpack --config webpack.config.demo.js"
  }
  // ...
}
```

除了配置檔的設定方式，還可以使用 CLI 的 `--output-filename` 參數設定。

## 結果

```bash
> webpack --config webpack.config.demo.js

asset bundle.js 21 bytes [emitted] [minimized] (name: main)
./src/index.js 22 bytes [built] [code generated]
```

輸出名為 `bundle.js` 的 bundle 檔案。
