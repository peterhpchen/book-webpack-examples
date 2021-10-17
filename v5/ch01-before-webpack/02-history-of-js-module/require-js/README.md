# require-js

## 目的

演示使用 RequireJS 的導出與導入模組。

## 實作

使用 RequireJS 導出 `add.js` 中的 `add` 函式，並在 `index.js` 中導入 `add` 函式並叫用。

## 執行

使用 Server 開啟 `index.html` 。

以 [`http-server`](https://www.npmjs.com/package/http-server) 作為 Server 為例：

```bash
http-server
```

## 結果

在瀏覽器上開啟 Server 的網址，並開啟 Developer Tools ，在 Console 中可以看到 `3` 。
