# entry-object-object-array

## webpack.config.demo.js

```js
// ch03-configuration/02-entry/entry-object-object-array/webpack.config.demo.js
module.exports = {
  entry: {
    main2: {
      import: ['./app/index.js', './app/index2.js'],
    },
  },
};
```

在 `entry` 物件中使用 `import` 以陣列設定多個入口路徑。

## 結果

```bash
> webpack --config webpack.config.demo.js

asset main2.js 66 bytes [emitted] [minimized] (name: main2)
orphan modules 49 bytes [orphan] 2 modules
cacheable modules 146 bytes
  ./app/index.js + 1 modules 71 bytes [built] [code generated]
  ./app/index2.js + 1 modules 75 bytes [built] [code generated]
```

產生 `main2.js` 這個以 `entry` 配置的物件屬性同名的 bundle 。

### dist/main2.js

<!-- prettier-ignore -->
```js
(()=>{"use strict";console.log("index"),console.log("index2")})();
```

`dist/main2.js` 的內容來源於 `import` 所設定的 `src/index.js` 與 `src/index2.js` 兩個入口模組。
