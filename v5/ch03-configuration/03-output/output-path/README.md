# output-path

## webpack.config.demo.js

```js
// ch03-configuration/03-output/output-path/webpack.config.demo.js
const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
  },
};
```

設置輸出目錄為 `build` 。

## package.json

```json
{
  "scripts": {
    "build:argv": "webpack --output-path $PWD/build",
    "build:argv2": "webpack --output-path build",
    "build:argv-short": "webpack -o build",
    "build:file": "webpack --config webpack.config.demo.js"
  }
  // ...
}
```

輸出目錄的設定方式有：

- `build:argv` ：以絕對路徑設定 `--output-path` 參數。
- `build:argv2` ：以相對路徑設定 `--output-path` 參數。
- `build:argv-short` ： `--output-path` 的縮寫 `-o` 。
- `build:file` ：使用配置檔設定。

## 結果

```bash
> webpack --config webpack.config.demo.js

asset main.js 21 bytes [emitted] [minimized] (name: main)
./src/index.js 22 bytes [built] [code generated]
```

### build/main.js

<!-- prettier-ignore -->
```js
console.log("index");
```

被輸出至 `build` 目錄中。
