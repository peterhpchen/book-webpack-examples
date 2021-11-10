# absolute

## src/hello.js

```js
export default 'hello';
```

## src/index.js

```js
import helloPOSIX from '/Users/PeterChen/Documents/code/book-webpack/examples/v5/ch03-configuration/04-resolve/absolute/src/hello.js';
// import helloWINDOWS from 'C:\\Users\\PeterChen\\Documents\\code\\book-webpack\\examples\\v5\\ch03-configuration\\04-resolve\\absolute\\src\\hello.js';

console.log(helloPOSIX);
// console.log(helloWINDOWS);
```

使用絕對路徑載入模組。

> 注意不同作業系統下，表示絕對路徑的方式不同。

## 結果

```bash
asset main.js 44 bytes [emitted] [minimized] (name: main)
orphan modules 24 bytes [orphan] 1 module
./src/index.js + 1 modules 424 bytes [built] [code generated]
```

### dist/main.js

<!-- prettier-ignore -->
```js
(()=>{"use strict";console.log("hello")})();
```

Webpack 正確地載入並打包 `src/hello.js` 。
