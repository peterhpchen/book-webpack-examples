# context

## webpack.config.js

```js
// ch03-configuration/02-entry/context/webpack.config.demo.js
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'frontend'),
};
```

設定 `context` ，將預設專案路徑設為 `frontend` 目錄。

## package.json

```json
{
  "scripts": {
    "build:argv": "webpack --context frontend",
    "build:file": "webpack --config webpack.config.demo.js"
  }
  // ...
}
```

除了使用配置檔外，也可以使用 CLI 的 `--context` 參數設定。

## frontend/src/index.js

```js
console.log('index');
```

## 結果

```bash
> webpack --context frontend

asset main.js 21 bytes [emitted] [minimized] (name: main)
./src/index.js 22 bytes [built] [code generated]
```

Webpack 因為 `context` 的設定，將 `frontend` 目錄作為專案目錄，因此輸出的 log 雖然是 `./src/index.js` ，但其實是在 `frontend/src/index.js` 。
