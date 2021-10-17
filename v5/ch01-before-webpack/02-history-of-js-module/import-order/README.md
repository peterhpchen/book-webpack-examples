# import-order

## 目的

演示 `<script>` 順序錯置所產生的問題。

## 實作

在 `index.html` 中將 `lodash` 的引入時機調整至晚於使用 `_.join()` 的時間點，`_.join()` 會因尚未引入 `lodash` 而拋錯，並且使用其的 `outputStr` 變數也會變為 `undefined` 。

## 執行

使用 Server 開啟 `index.html` 。

以 [`http-server`](https://www.npmjs.com/package/http-server) 作為 Server 為例：

```bash
http-server
```

## 結果

在瀏覽器上開啟 Server 的網址，並開啟 Developer Tools ，在 Console 中可以看到 `Uncaught ReferenceError: _ is not defined` 的錯誤，並且緊接著輸出 `undefined` 。
