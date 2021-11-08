# entry-object-object-filename

## webpack.config.demo.js

```js
// ch03-configuration/02-entry/entry-object-object-filename/webpack.config.demo.js
module.exports = {
  mode: 'development',
  entry: {
    app: {
      import: './app/index.js',
      filename: 'hello/world.js',
    },
  },
};
```

使用 `filename` 屬性設定輸出的 bundle 檔案名稱。

## 結果

```bash
> webpack --config webpack.config.demo.js

asset hello/world.js 4.86 KiB [emitted] (name: app)
runtime modules 670 bytes 3 modules
cacheable modules 147 bytes
  ./app/index.js 104 bytes [built] [code generated]
  ./app/msgCommon.js 24 bytes [built] [code generated]
  ./app/msg.js 19 bytes [built] [code generated]
webpack 5.62.1 compiled successfully in 115 ms
```

依照 `filename` 所設定的輸出 bundle 。
