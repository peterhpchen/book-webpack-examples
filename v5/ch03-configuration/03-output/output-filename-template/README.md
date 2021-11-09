# output-filename-template

## [name]

### webpack.config.name.js

```js
module.exports = {
  entry: {
    main: './src/index.js',
    main2: './src/index2.js',
  },
  output: {
    filename: '[name].js',
  },
};
```

### [name] 建置結果

```bash
asset main2.js 22 bytes [emitted] [minimized] (name: main2)
asset main.js 21 bytes [emitted] [minimized] (name: main)
./src/index.js 22 bytes [built] [code generated]
./src/index2.js 23 bytes [built] [code generated]
```

輸出為 chunk 名稱。

## [id]

### webpack.config.id.js

```js
module.exports = {
  entry: {
    main: './src/index.js',
    main2: './src/index2.js',
  },
  output: {
    filename: '[id].js',
  },
  stats: {
    ids: true,
  },
};
```

`stats.ids` 設為 `true` 讓 id 資訊可以輸出。

### [id] 建置結果

```bash
asset 869.js 22 bytes {869} [emitted] [minimized] (name: main2)
asset 179.js 21 bytes {179} [emitted] [minimized] (name: main)
./src/index.js [138] 22 bytes {179} [built] [code generated]
./src/index2.js [51] 23 bytes {869} [built] [code generated]
```

輸出為 chunk 的 id 。

## [fullhash]

### webpack.config.fullhash.js

```js
module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[fullhash].js',
  },
};
```

### [fullhash] 建置結果

```bash
asset b8ee28560c09ac5c8f97.js 21 bytes [emitted] [immutable] [minimized] (name: main)
./src/index.js 22 bytes [built] [code generated]
```

輸出為整個建置的 hash 值，需要注意的是，由於整個建置只有唯一的 `[fullhash]` ，因此如果有多個 bundle 時，會出錯。

## [chunkhash]

### webpack.config.chunkhash.js

```js
module.exports = {
  entry: {
    main: './src/index.js',
    main2: './src/index2.js',
  },
  output: {
    filename: '[chunkhash].js',
  },
};
```

### [chunkhash] 建置結果

```bash
asset f1a8796e1be1c4590d3c.js 22 bytes [emitted] [immutable] [minimized] (name: main2)
asset b8e31a72d9364ecb71b7.js 21 bytes [emitted] [immutable] [minimized] (name: main)
./src/index.js 22 bytes [built] [code generated]
./src/index2.js 23 bytes [built] [code generated]
```

輸出為 chunk 的 hash 值。

## [contenthash]

### webpack.config.contenthash.js

```js
module.exports = {
  entry: {
    main: './src/index.js',
    main2: './src/index2.js',
  },
  output: {
    filename: '[contenthash].js',
  },
};
```

### [contenthash] 建置結果

```bash
asset 96dd70ddb9ab6d14cfb3.js 22 bytes [emitted] [immutable] [minimized] (name: main2)
asset f1ee43ae9db946f2dd55.js 21 bytes [emitted] [immutable] [minimized] (name: main)
./src/index.js 22 bytes [built] [code generated]
./src/index2.js 23 bytes [built] [code generated]
```

輸出為各個 bundle 的內容所生成的 hash 值。

## escape

### webpack.config.escape.js

```js
module.exports = {
  entry: {
    main: './src/index.js',
    main2: './src/index2.js',
  },
  output: {
    filename: '[name].[\\id\\].js',
  },
};
```

使用 `\` 包住中間值 `id` ，藉以跳脫 template string 。

### escape 建置結果

```bash
asset main2.[id].js 22 bytes [emitted] [minimized] (name: main2)
asset main.[id].js 21 bytes [emitted] [minimized] (name: main)
./src/index.js 22 bytes [built] [code generated]
./src/index2.js 23 bytes [built] [code generated]
```

未跳脫的 `[name]` 依照 template string 規則輸出，而跳脫的 `[id]` 則以字串形式直接輸出。
