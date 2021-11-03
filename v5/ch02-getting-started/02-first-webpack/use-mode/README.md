# use-mode

## package.json

```json
{
  // ...
  "scripts": {
    "build": "webpack",
    "dev": "webpack --mode development",
    "start": "http-server ./dist"
  }
  // ...
}
```

Scripts `build` 指令使用預設的 production 模式建置，而 `dev` 則是啟用 webpack 的 development 模式， 。

## 結果

### production 模式的建置結果

```js
asset main.js 70.7 KiB [emitted] [minimized] (name: main) 1 related asset
asset index.html 105 bytes [emitted] [from: public/index.html] [copied]
runtime modules 1010 bytes 5 modules
cacheable modules 535 KiB
  modules by path ./node_modules/ 534 KiB
    ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
    ./node_modules/css-loader/dist/runtime/noSourceMaps.js 64 bytes [built] [code generated]
    ./node_modules/css-loader/dist/runtime/api.js 2.26 KiB [built] [code generated]
  modules by path ./src/ 912 bytes
    ./src/index.js 453 bytes [built] [code generated]
    ./node_modules/css-loader/dist/cjs.js!./src/style.css 459 bytes [built] [code generated]
```

Production 模式下， webpack 會使用效能最佳化的策略進行建置，可以看到檔案的大小較 development 模式小。

### development 模式的建置結果

```js
asset main.js 560 KiB [emitted] (name: main)
asset index.html 105 bytes [compared for emit] [from: public/index.html] [copied]
runtime modules 1.25 KiB 6 modules
cacheable modules 535 KiB
  modules by path ./node_modules/ 534 KiB
    ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
    ./node_modules/css-loader/dist/runtime/noSourceMaps.js 64 bytes [built] [code generated]
    ./node_modules/css-loader/dist/runtime/api.js 2.26 KiB [built] [code generated]
  modules by path ./src/ 912 bytes
    ./src/index.js 453 bytes [built] [code generated]
    ./node_modules/css-loader/dist/cjs.js!./src/style.css 459 bytes [built] [code generated]
```

Development 模式下， webpack 會使用最適合 debug 的方式執行建置，因為有加上 source map 等開發優化的代碼，因此容量較 production 模式大上許多。
