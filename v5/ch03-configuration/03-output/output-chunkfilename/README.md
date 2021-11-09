# output-chunkfilename

## src/index.js

```js
async function getString() {
  const { default: hello } = await import('./hello.js');

  return hello;
}

getString().then((str) => {
  console.log(str);
});
```

延遲載入 `hello.js` ，此為 `non-initial` chunk 。

```js
export default 'Hello';
```

## webpack.config.js

```js
module.exports = {
  output: {
    chunkFilename: '[id].chunk.js',
  },
  stats: {
    ids: true,
  },
};
```

`chunkFilename` 設定 `non-initial` 的 Chunk 名稱。

## 結果

```bash
asset main.js 2.5 KiB {179} [emitted] [minimized] (name: main)
asset 395.chunk.js 132 bytes {395} [emitted] [minimized]
runtime modules 6.58 KiB 9 modules
cacheable modules 182 bytes
  ./src/index.js [138] 158 bytes {179} [built] [code generated]
  ./src/hello.js [395] 24 bytes {395} [built] [code generated]
```

`hello.js` 依照配置輸出為 `395.chunk.js` 。
