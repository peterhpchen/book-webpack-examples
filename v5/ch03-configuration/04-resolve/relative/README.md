# relative

## src/index.js

```js
import './utils/sayHi.js';
```

使用同層（ `./` ）相對路徑引入 `sayHi.js` 。

## src/utils/sayHi.js

```js
import name from '../name.js';

console.log(`Hello ${name}`);
```

使用上層（ `../` ）相對路徑引入 `name.js` 。

## src/name.js

```js
export default 'hello';
```

## 結果

```bash
asset main.js 50 bytes [emitted] [minimized] (name: main)
orphan modules 201 bytes [orphan] 2 modules
./src/index.js + 2 modules 283 bytes [built] [code generated]
```

### dist/main.js

<!-- prettier-ignore -->
```js
(()=>{"use strict";console.log("Hello hello")})();
```

使用相對路徑引入並打包為 bundle 。
