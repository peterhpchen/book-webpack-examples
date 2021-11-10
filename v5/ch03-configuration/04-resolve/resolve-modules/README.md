# resolve-modules

## webpack.config.js

```js
const path = require('path');

module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  stats: {
    orphanModules: true,
  },
};
```

`resolve.modules` 決定模組找尋的順序，這裡設定先找 `src` 目錄，沒有才會去找 `node_modules` 。

> 加上 `stats.orphanModules` 是為了輸出引入資訊。

## src/index.js

```js
import _ from 'lodash';

console.log(_.join(['Hello', 'Webpack']));
```

引入 `lodash` 模組。

## src/lodash.js

```js
export default {
  join(arr) {
    return arr.join();
  },
};
```

## 結果

```bash
asset main.js 63 bytes [emitted] [minimized] (name: main)
./src/index.js + 1 modules 183 bytes [built] [code generated]
./src/lodash.js 62 bytes [orphan] [built]
```

可以看到引入的不是 `node_modules` 中的 lodash 庫，而是定義在 `src` 目錄下的 `lodash.js` 。
