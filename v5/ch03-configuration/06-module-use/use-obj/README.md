# use-obj

## loader/index.js

```js
module.exports = function (source) {
  console.log(`${this.getOptions().name} loader execution`);
  return source;
};
```

自定義的 loader ，輸出對應的設定 `name` ，以便觀察 loader 的使用情形。

## src/index.js

```js
console.log('index');
```

## webpack.config.js

```js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: path.resolve(__dirname, 'loader'),
          options: {
            name: 'a',
          },
        },
      },
    ],
  },
};
```

`.js` 的 loader 使用 `use.loader` 設置本地目錄 `loader` ，並以 `use.options` 設置選項 `name` 。

## 結果

```bash
a loader execution
asset main.js 21 bytes [emitted] [minimized] (name: main)
./src/index.js 22 bytes [built] [code generated]
```

因為選項 `name` 的設定，因此輸出了 `a` 這個設定值。
