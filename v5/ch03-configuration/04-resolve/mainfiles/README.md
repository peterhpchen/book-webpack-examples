# mainfiles

## 目錄

```plaintext
src
|- /utils
  |- /alpha
    |- index.js
    |- main.js
|- index.js
```

目錄 `utils/alpha` 中有兩個檔案 `index.js` 與 `main.js` 。

## src/index.js

```js
import './utils/alpha';
```

引入 `alpha` 目錄中的模組。

## webpack.config.js

```js
module.exports = {
  stats: {
    orphanModules: true,
  },
};
```

> 加上 `stats.orphanModules` 是為了輸出引入資訊。

### webpack.config.js 建置結果

```bash
> webpack

asset main.js 0 bytes [compared for emit] [minimized] (name: main)
./src/index.js 80 bytes [built] [code generated]
./src/utils/alpha/index.js 24 bytes [orphan] [built]
```

Webpack 預設會取目錄下的 `index.js` 作為模組的入口點。

## webpack.config.main.js

```js
module.exports = {
  resolve: {
    mainFiles: ['main', 'index'],
  },
  stats: {
    orphanModules: true,
  },
};
```

修改取模組檔案的設定，將 `main` 排在 `index` 之前。

### webpack.config.main.js 建置結果

```bash
> webpack --config webpack.config.main.js

asset main.js 0 bytes [compared for emit] [minimized] (name: main)
./src/index.js 80 bytes [built] [code generated]
./src/utils/alpha/main.js 24 bytes [orphan] [built]
```

可以看到引入的檔案變為 `main.js` 。
