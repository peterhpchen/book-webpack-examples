# resolve-alias

## webpack.config.js

```js
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
```

使用 `resolve.alias` 設定路徑別名。

## src/pages/alpha.js

```js
import alpha from '@/utils/alpha.js';

console.log(`${alpha}`);
```

使用別名引入模組，相等於相對路徑的 `../utils/alpha.js` 寫法。

## src/pages/beta.js

```js
import beta from '../utils/beta.js';

console.log(`${beta}`);
```

使用相對路徑引入模組。

## 好處

別名的好處是可以**避免在移動引用與被引用模組的相對位置後，需要修改引用的代碼**。
