# config-file

## webpack.config.js

```js
// ch02-getting-started/04-use-webpack/config-file/webpack.config.js
console.log(__filename);

const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index2.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
  },
};
```

輸出目錄為 `build` ，這裏 log 出當前的檔案路徑，以便之後 demo 參照。

## webpack.config.dev.js

```js
// ch02-getting-started/04-use-webpack/config-file/webpack.config.dev.js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index2.js'),
  output: {
    path: path.resolve(__dirname, 'dev'),
  },
};
```

輸出目錄為 `dev` 。

## 結果

```bash
> webpack --config webpack.config.dev.js

asset main.js 1.21 KiB [emitted] (name: main)
./src/index2.js 34 bytes [built] [code generated]
```

使用 `--config` 指定配置檔 `webpack.config.dev.js` 做建置， bundle 會輸出至 `dev` 目錄。

```bash
> webpack

/Users/PeterChen/Documents/code/book-webpack-examples/v5/ch02-getting-started/04-use-webpack/config-file/webpack.config.js
asset main.js 33 bytes [compared for emit] [minimized] (name: main)
./src/index2.js 34 bytes [built] [code generated]
```

預設的 `webpack` 指令依序使用下面的配置檔：

```plaintext
['webpack.config.js', '.webpack/webpack.config.js', '.webpack/webpackfile']
```

所以當你依序刪除各個預設的配置檔後， webpack 會去尋找下一個預設的配置檔。

例如刪除 `webpack.config.js` 後：

```bash
> webpack

/Users/PeterChen/Documents/code/book-webpack-examples/v5/ch02-getting-started/04-use-webpack/config-file/.webpack/webpack.config.js
asset main.js 33 bytes [compared for emit] [minimized] (name: main)
./src/index2.js 34 bytes [built] [code generated]
```

它會使用 `.webpack.webpack.config.js` 作為配置檔。
