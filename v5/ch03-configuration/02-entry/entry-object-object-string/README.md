# entry-object-object-string

## webpack.config.demo.js

```js
// ch03-configuration/02-entry/entry-object-object-string/webpack.config.demo.js
module.exports = {
  entry: {
    main: {
      import: './app/index.js',
    },
    main2: {
      import: './app/index2.js',
    },
  },
};
```

`entry` 的物件中設定物件，並將 `import` 設為入口模組的路徑。

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

輸出了 `main.js` 與 `main2.js` 兩個 bundle 。

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

`import` 設定的入口模組，分別組成不同的 bundle `main.js` 與 `main2.js` 。
