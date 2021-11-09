# output-path-hash

## webpack.config.demo.js

```js
// ch03-configuration/03-output/output-path-hash/webpack.config.demo.js
const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, '[fullhash]'),
  },
};
```

以 template string `[fullhash]` 設定輸出目錄。

## package.json

```json
{
  "scripts": {
    "build:argv": "webpack --output-path $PWD/[fullhash]",
    "build:argv2": "webpack --output-path [fullhash]",
    "build:file": "webpack --config webpack.config.demo.js"
  }
  // ...
}
```

除了配置檔，也可以使用 CLI 參數設定。

## 結果

```bash
> webpack --config webpack.config.demo.js

asset main.js 21 bytes [emitted] [minimized] (name: main)
./src/index.js 22 bytes [built] [code generated]
```

### b8ee28560c09ac5c8f97/main.js

<!-- prettier-ignore -->
```js
console.log("index");
```

輸出在以 Compilation 的 hash 值為名的目錄中。
