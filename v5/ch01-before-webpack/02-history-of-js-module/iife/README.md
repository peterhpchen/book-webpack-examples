# iife

## 目的

演示使用 IIFE 處理內部變數衝突。

## 實作

使用 IIFE 避免 `index.js` 的 `output` 函式內的 `outputStr` 與 `index.html` 中的 `<script>` 內定義的 `outputStr` 發生覆蓋的問題。

## 執行

使用 Server 開啟 `index.html` 。

以 [`http-server`](https://www.npmjs.com/package/http-server) 作為 Server 為例：

```bash
http-server
```

## 結果

在瀏覽器上開啟 Server 的網址，並開啟 Developer Tools ，在 Console 中可以看到：

```bash
Hello, world!
World, hello!
Hello, world!
```
