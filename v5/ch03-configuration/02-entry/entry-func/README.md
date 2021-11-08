# entry-func

## webpack.config.demo.js

```js
// ch03-configuration/02-entry/entry-func/webpack.config.demo.js
module.exports = {
  entry: () => './app/index.js',
};
```

使用函式設定 `entry` 。

## 結果

函式的方式會在 `make` 事件鉤子觸發時取得入口點設定。
