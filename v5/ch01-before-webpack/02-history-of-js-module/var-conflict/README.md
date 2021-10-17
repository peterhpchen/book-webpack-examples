# var-conflict

## 目的

演示在全域中定義的變數互相覆蓋的問題。

## 實作

在 `index.js` 中設定 `outputStr` 變數與 `output()` 函式。在 `index.html` 中引入 `index.js` ，並在 `<script>` 中定義與 `index.js` 的變數同名的 `outputStr` ，在這定義前後分別叫用一次 `output()` ，兩次叫用所輸出的字串會不同。

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
World, hello!
```
