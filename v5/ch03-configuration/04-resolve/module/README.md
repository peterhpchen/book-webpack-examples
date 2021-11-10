# module

## src/index.js

```js
import _ from 'lodash';

console.log(_.join(['Hello', 'Webpack']));
```

直接使用庫的名稱 `lodash` 引入第三方庫 Lodash ，並使用其所提供的函式 `_.join()` 。

## webpack.config.js

```js
module.exports = {
  stats: {
    dependentModules: true,
  },
};
```

將 `stats.dependentModules` 設為 `true` ，藉以輸出相依的模組資訊。

## 結果

```bash
asset main.js 69.4 KiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 1010 bytes 5 modules
cacheable modules 531 KiB
  ./src/index.js 121 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
```

經過 webpack 的處理，將模組名稱轉為實際的模組路徑 `./node_modules/lodash/lodash.js` 並引入，一起打包進了 bundle 。
