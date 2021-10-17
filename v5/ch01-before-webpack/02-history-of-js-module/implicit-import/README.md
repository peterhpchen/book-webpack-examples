# implicit-import

## 目的

演示在使用隱性引入時所潛藏的引用錯誤問題。

## 實作

在沒有執行 `index.js` 的情況下，叫用它的 `output` 函式，在執行時才會拋出錯誤。

## 執行

使用 Server 開啟 `index.html` 。

以 [`http-server`](https://www.npmjs.com/package/http-server) 作為 Server 為例：

```bash
http-server
```

## 結果

在瀏覽器上開啟 Server 的網址，並開啟 Developer Tools ，在 Console 中可以看到 `Uncaught ReferenceError: output is not defined` 的錯誤。
