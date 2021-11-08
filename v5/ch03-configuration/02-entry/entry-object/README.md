# entry-object

## webpack.config.demo.js

```js
// ch03-configuration/02-entry/entry-object/webpack.config.demo.js
module.exports = {
  entry: {
    main: './app/index.js',
    main2: './app/index2.js',
  },
};
```

設定物件的 `entry` ，兩個屬性 `main` 與 `main2` ，分別設定不同的入口點。

## 結果

```bash
> webpack --config webpack.config.demo.js

asset main2.js 45 bytes [emitted] [minimized] (name: main2)
asset main.js 44 bytes [emitted] [minimized] (name: main)
orphan modules 49 bytes [orphan] 2 modules
cacheable modules 146 bytes
  ./app/index.js + 1 modules 71 bytes [built] [code generated]
  ./app/index2.js + 1 modules 75 bytes [built] [code generated]
```

輸出的 `main.js` 與 `main2.js` 兩個檔案。

### dist/main.js

<!-- prettier-ignore -->
```js
(()=>{"use strict";console.log("index")})();
```

### dist/main2.js

<!-- prettier-ignore -->
```js
(()=>{"use strict";console.log("index2")})();
```

由於兩個入口點設定不同的屬性值 `main` 與 `main2` ， webpack 會將各個入口點的內容打包成不同的 bundle 檔案。
