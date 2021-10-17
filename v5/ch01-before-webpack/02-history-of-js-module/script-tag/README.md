# script-tag

## 目的

使用 `<script>` 的 `src` 屬性引入外部 JavaScript 。

## 實作

在 `index.html` 中使用 `<script>` 的 `src` 屬性引入 `index.js` 。

## 執行

使用 Server 開啟 `index.html` 。

以 [`http-server`](https://www.npmjs.com/package/http-server) 作為 Server 為例：

```bash
http-server
```

## 結果

在瀏覽器上開啟 Server 的網址，並開啟 Developer Tools ，在 Console 中可以看到 `Hello, world!` 。
