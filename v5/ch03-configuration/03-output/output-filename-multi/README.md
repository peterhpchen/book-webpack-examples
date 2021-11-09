# output-filename-multi

## webpack.config.error.js

```js
module.exports = {
  entry: {
    main: './src/index.js',
    main2: './src/index2.js',
  },
  output: {
    filename: 'bundle.js',
  },
};
```

使用 `entry` 設定 `main` 與 `main2` 兩個 Chunk ，而 `output` 使用固定的 `bundle.js` 。

## webpack.config.error.js 建置結果

```bash
> webpack --config webpack.config.error.js

[webpack-cli] Error: Conflict: Multiple chunks emit assets to the same filename bundle.js (chunks 179 and 869)
```

由於多個 Chunk 都想要輸出為同名的 `bundle.js` ，因此造成錯誤。

## webpack.config.demo.js

```js
// ch03-configuration/03-output/output-filename-multi/webpack.config.demo.js
module.exports = {
  entry: {
    main: './src/index.js',
    main2: './src/index2.js',
  },
  output: {
    filename: 'bundle.[name].js',
  },
};
```

使用 template string `[name]` ，以動態的方式產生 bundle 檔名。

## webpack.config.demo.js 建置結果

```bash
> webpack --config webpack.config.demo.js

asset bundle.main2.js 22 bytes [emitted] [minimized] (name: main2)
asset bundle.main.js 21 bytes [emitted] [minimized] (name: main)
./src/index.js 22 bytes [built] [code generated]
./src/index2.js 23 bytes [built] [code generated]
```

以 Chunk 名稱 `main` 與 `main2` 輸出為不同檔名的 bundle 。
