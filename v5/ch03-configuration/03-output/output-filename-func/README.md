# output-filename-func

## webpack.config.demo.js

```js
module.exports = {
  entry: {
    main: './src/index.js',
    main2: './src/index2.js',
  },
  output: {
    filename(chunkData) {
      return chunkData.chunk.name === 'main'
        ? 'main.js'
        : `bundle.${chunkData.chunk.name}.js`;
    },
  },
};
```

使用函式設定 `filename` ，如果 chunk 名稱為 `main` 則輸出 `main.js` ，反之則為 `bundle.${chunk name}.js` 。

## 結果

```bash
> webpack --config webpack.config.demo.js

asset bundle.main2.js 22 bytes [emitted] [minimized] (name: main2)
asset main.js 21 bytes [emitted] [minimized] (name: main)
./src/index.js 22 bytes [built] [code generated]
./src/index2.js 23 bytes [built] [code generated]
```

Chunk `main` 輸出為 bundle `main.js` ， `main2` 輸出為 `bundle.main2.js` 。
