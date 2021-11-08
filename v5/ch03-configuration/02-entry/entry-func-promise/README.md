# entry-func-promise

## webpack.config.demo.js

```js
// ch03-configuration/02-entry/entry-func-promise/webpack.config.demo.js
module.exports = {
  entry: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('./app/index.js');
      }, 5000);
    }),
};
```

函式傳回 `Promise()` ，以非同步的方式回傳 `entry` 的設定。

## 結果

在非同步的 `Promise()` `resolve` 後才會建置，藉此模擬由遠端取得 `entry` 檔案時的情境。
