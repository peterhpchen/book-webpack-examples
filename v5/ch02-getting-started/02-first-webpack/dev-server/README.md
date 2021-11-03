# dev-server

## package.json

```json
{
  // ...
  "scripts": {
    // ...
    "dev": "webpack serve --mode development"
  }
  // ...
}
```

Scripts `dev` 執行 `webpack-dev-server` 作為開發用伺服器。

## 結果

```bash
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8082/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.50.139:8082/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:8082/
<i> [webpack-dev-server] Content not from webpack is served from '/Users/PeterChen/Documents/code/book-webpack-examples/v5/ch02-getting-started/02-first-webpack/dev-server/public' directory


asset main.js 841 KiB [emitted] (name: main)
asset index.html 105 bytes [emitted] [from: public/index.html] [copied]
runtime modules 27 KiB 13 modules
modules by path ./node_modules/ 733 KiB
  modules by path ./node_modules/webpack-dev-server/client/ 52.7 KiB 12 modules
  modules by path ./node_modules/webpack/hot/*.js 4.3 KiB 4 modules
  modules by path ./node_modules/html-entities/lib/*.js 81.3 KiB 4 modules
  modules by path ./node_modules/url/ 37.4 KiB 3 modules
  modules by path ./node_modules/querystring/*.js 4.51 KiB 3 modules
  modules by path ./node_modules/css-loader/dist/runtime/*.js 2.33 KiB 2 modules
  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
  ./node_modules/ansi-html-community/index.js 4.16 KiB [built] [code generated]
  ./node_modules/events/events.js 14.5 KiB [built] [code generated]
modules by path ./src/ 912 bytes
  ./src/index.js 453 bytes [built] [code generated]
  ./node_modules/css-loader/dist/cjs.js!./src/style.css 459 bytes [built] [code generated]
webpack 5.61.0 compiled successfully in 900 ms


assets by status 105 bytes [cached] 1 asset
assets by path *.js 843 KiB
  asset main.js 841 KiB [emitted] (name: main)
  asset main.a85b0d46b7334e64f34e.hot-update.js 2.08 KiB [emitted] [immutable] [hmr] (name: main)
asset main.a85b0d46b7334e64f34e.hot-update.json 28 bytes [emitted] [immutable] [hmr]
Entrypoint main 843 KiB = main.js 841 KiB main.a85b0d46b7334e64f34e.hot-update.js 2.08 KiB
cached modules 733 KiB [cached] 32 modules
runtime modules 27 KiB 13 modules
./src/index.js 455 bytes [built] [code generated]
webpack 5.61.0 compiled successfully in 88 ms
```

執行結果說明如下：

- 第一段是 `webpack-dev-server` 的基本資訊，可以看到它將伺服器啟在 `http://localhost:8082` 上。
- 第二段是初次建置的輸出資訊。
- 第三段是修改 `index.js` 內容並儲存時， 觸發了 `webpack-dev-server` 的重新建置功能，並將結果顯現於瀏覽器中。

使用 `webpack-dev-server` 開發時，既不需要另開個伺服器（例如前面使用的 `http-server` ），也不用執行 development 模式的建置，因為 `webpack-dev-server` 會依照開發需求給予最佳的配置，並開啟伺服器。

當使用者修改代碼時， `webpack-dev-server` 也可以偵測並重新建置來輸出結果，避免手動建置麻煩。
