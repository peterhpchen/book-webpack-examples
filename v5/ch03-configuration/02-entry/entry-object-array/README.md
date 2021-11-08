# entry-object-array

## webpack.config.demo.js

```js
// ch03-configuration/02-entry/entry-object-array/webpack.config.demo.js
module.exports = {
  entry: {
    main2: ['./app/index.js', './app/index2.js'],
  },
};
```

使用物件設定 `entry` ，並且對屬性 `main2` 以陣列配置複數個路徑。

## 結果

```bash
> webpack --config webpack.config.demo.js

asset main2.js 66 bytes [emitted] [minimized] (name: main2)
orphan modules 49 bytes [orphan] 2 modules
cacheable modules 146 bytes
  ./app/index.js + 1 modules 71 bytes [built] [code generated]
  ./app/index2.js + 1 modules 75 bytes [built] [code generated]
```

建置後產生 `main2.js` ，此 bundle 檔案的名字會與配置中物件的屬性名相同。

### dist/main2.js

<!-- prettier-ignore -->
```js
(()=>{"use strict";console.log("index"),console.log("index2")})();
```

兩個路徑的模組 `./app/index.js` 、 `./app/index2.js` 內容都包入了 `main2.js` 中。
