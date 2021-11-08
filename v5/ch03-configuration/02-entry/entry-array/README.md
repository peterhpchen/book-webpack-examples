# entry-array

## webpack.config.demo.js

```js
// ch03-configuration/02-entry/entry-array/webpack.config.demo.js
module.exports = {
  entry: ['./app/index.js', './app/index2.js'],
};
```

設定複數個入口。

## package.json

```json
{
  "scripts": {
    "build:argv": "webpack ./app/index.js ./app/index2.js",
    "build:file": "webpack --config webpack.config.demo.js"
  }
  // ...
}
```

設定複數個 `entry` ，除了直接使用配置檔外，還可以將所有要配置的路徑作為參數設定。

## 結果

### dist/main.js

<!-- prettier-ignore -->
```js
(()=>{"use strict";console.log("index"),console.log("index2")})();
```

建置後，兩個入口模組的內容都被放入 bundle `dist/main.js` 中。這樣的設定稱為 **multi-main entry** ，作用為由多個入口組成單一 bundle 的配置方式。
