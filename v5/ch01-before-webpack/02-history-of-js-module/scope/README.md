# scope

## 目的

在內嵌的 `<script>` 中使用外部 JavaScript 定義的變數，展示 JavaScript 腳本式引入方法的全域特性。

## 實作

在 `index.html` 中的 `<script>` 中使用 `index.js` 中所定義的 `outputStr` 變數。

## 執行

使用 Server 開啟 `index.html` 。

以 [`http-server`](https://www.npmjs.com/package/http-server) 作為 Server 為例：

```bash
http-server
```

## 結果

在瀏覽器上開啟 Server 的網址，並開啟 Developer Tools ，在 Console 中可以看到 `Hello, world!` 。
