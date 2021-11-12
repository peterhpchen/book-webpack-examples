# loader-order

## loader/index.js

```js
module.exports = function (source) {
  const options = this.getOptions();
  console.log(`${(options && options.name) || 'this'} loader execution`);
  return source;
};
```

自定義 loader ，輸出 loader 選項的 `name` ，以便觀察 loader 的叫用。

## src/index.js

```js
import '../loader/index.js?name=c2!../loader/index.js?name=c1!./hello.js'; // a1 a2 b1 b2 c1 c2 d1 d2
// import '!../loader/index.js?name=c2!../loader/index.js?name=c1!./hello.js'; // a1 a2 c1 c2 d1 d2
// import '-!../loader/index.js?name=c2!../loader/index.js?name=c1!./hello.js'; // c1 c2 d1 d2
// import '!!../loader/index.js?name=c2!../loader/index.js?name=c1!./hello.js'; // c1 c2
```

引入 `src/hello.js` ，使用 `../loader/index.js?name={c2,c1}` 觸發 **inline** loader 。

註解使用不同的前置符 disable 部分的 loader 執行：

- `!` ：取消 **normal** loader 的執行。
- `-!` ：取消 **pre** 與 **normal** loader 的執行。
- `!!` ：取消 **pre** 、 **normal** 與 **post** loader 的執行。

請參照引入行右邊的結果。

## webpack.config.js

```js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'src', 'index.js'),
        rules: [
          {
            enforce: 'pre',
            loader: path.resolve(__dirname, 'loader'),
            options: {
              name: 'a2',
            },
          },
          {
            enforce: 'pre',
            loader: path.resolve(__dirname, 'loader'),
            options: {
              name: 'a1',
            },
          },
          {
            loader: path.resolve(__dirname, 'loader'),
            options: {
              name: 'b2',
            },
          },
          {
            loader: path.resolve(__dirname, 'loader'),
            options: {
              name: 'b1',
            },
          },
          {
            enforce: 'post',
            loader: path.resolve(__dirname, 'loader'),
            options: {
              name: 'd2',
            },
          },
          {
            enforce: 'post',
            loader: path.resolve(__dirname, 'loader'),
            options: {
              name: 'd1',
            },
          },
        ],
      },
    ],
  },
};
```

- `a2` 與 `a1` 為 **pre** loader 。
- `b2` 與 `b1` 為 **normal** loader 。
- `d2` 與 `d1` 為 **post** loader 。
