# output-filename-path

## webpack.config.demo.js

```js
module.exports = {
  output: {
    filename: 'js/bundle.js',
  },
};
```

`filename` 的設定也可以是相對路徑。

## 結果

```bash
> webpack --config webpack.config.demo.js

asset js/bundle.js 21 bytes [emitted] [minimized] (name: main)
./src/index.js 22 bytes [built] [code generated]
```

Bundle 檔案輸出在目錄 `dist` 中的 `js/bundle.js` 。
