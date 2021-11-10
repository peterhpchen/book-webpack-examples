# extensions

## src/index.js

```js
import './utils/alpha/index';
```

引入 `./utils/alpha/index` ，最後沒有指定副檔名。

## 結果

```bash
asset main.js 0 bytes [emitted] [minimized] (name: main)
orphan modules 24 bytes [orphan] 1 module
./src/index.js 87 bytes [built] [code generated]
```

取得 `index.js` 作為模組入口點，這是因為 `resolve.extensions` 負責設定省略副檔名的查找順序，而預設值為 `['.js', '.json', '.wasm']` 。
