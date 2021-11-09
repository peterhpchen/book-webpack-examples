# output-default

## webpack.config.demo.js

```js
// ch03-configuration/03-output/output-default/webpack.config.demo.js
const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
};
```

`output` 的預設值為：

- `path` ：輸出目錄為 `dist` 。
- `filename` ：依照 Chunk 名稱輸出 bundle 檔名。

## package.json

```json
{
  "scripts": {
    "build": "webpack",
    "build:file": "webpack --config webpack.config.demo.js"
  }
  // ...
}
```

由於此範例的配置檔是設定預設，因此可以不需要配置，直接下 `webpack` ，會產生同樣的效果。

## 結果

```bash
> webpack

asset main.js 21 bytes [emitted] [minimized] (name: main)
./src/index.js 22 bytes [built] [code generated]
```

輸出在目錄中，並且 bundle 檔名與 Chunk 名 `main` 相同。
