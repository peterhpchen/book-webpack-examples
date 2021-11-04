# cli-plus-file

## webpack.config.dev.js

```js
// ch02-getting-started/04-use-webpack/cli-plus-file/webpack.config.dev.js
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index2.js'),
  output: {
    path: path.resolve(__dirname, 'dev'),
  },
};
```

輸出目錄 `dev` 。

## webpack.config.prod.js

```js
// ch02-getting-started/04-use-webpack/cli-plus-file/webpack.config.prod.js
const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index2.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
  },
};
```

輸出目錄 `build` 。

## 結果

```bash
> webpack --mode development --config webpack.config.dev.js

asset main.js 1.21 KiB [emitted] (name: main)
./src/index2.js 34 bytes [built] [code generated]
```

使用 `--mode` 設定 development 模式建置，並使用 `webpack.config.dev.js` 內的設定。

```bash
> webpack --config webpack.config.prod.js

asset main.js 33 bytes [emitted] [minimized] (name: main)
./src/index2.js 34 bytes [built] [code generated]
```

使用預設的 production 模式建置，並使用 `webpack.config.prod.js` 內的設定。
