# simple-watch

## webpack.config.watch.js

```js
module.exports = {
  watch: true,
};
```

啟用 `watch` 屬性開啟監控模式。

## package.json

```json
{
  "scripts": {
    "dev:argv": "webpack --watch",
    "dev:file": "webpack --config webpack.config.watch.js",
    "start-server": "http-server ./dist"
  }
  // ...
}
```

除了設定配置檔外，也可以使用 CLI 的 `--watch` 啟用監控模式。

## 結果

監控模式啟動時，當原始代碼內容發生變化，例如將例子中的 `src/index.js` 中 console 的字串改為 `change` ，會觸發 webpack 的重新建置，這時重新整理瀏覽器的頁面後，就可以看到結果，不需要自己重新下建置的指令。
