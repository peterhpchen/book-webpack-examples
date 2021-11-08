# entry-func-array

## webpack.config.demo.js

```js
// ch03-configuration/02-entry/entry-func-array/webpack.config.demo.js
module.exports = {
  entry: () => ['./app/index.js', './app/index2.js'],
};
```

使用函式設定 `entry` ，並以陣列傳回多個入口路徑。

## 結果

### dist/main.js

<!-- prettier-ignore -->
```js
(()=>{"use strict";console.log("index"),console.log("index2")})();
```

函式的方式會在 `make` 事件鉤子觸發時取得入口點設定，由於設定多入口點綁定單一 bundle ，因此 `main.js` 中有兩個入口點的內容。
