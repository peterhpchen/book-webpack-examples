# loader-call

## loader/index.js

```js
module.exports = function (source) {
  console.log(`${this.getOptions().name} loader execution`);
  return source;
};
```

自定義的 webpack loader ，它會依照傳入的設定，輸出特定的名字，藉以了解是哪個 loader 被觸發並執行。

## webpack.config.js

```js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { loader: path.resolve(__dirname, 'loader'), options: { name: 'a' } },
          { loader: path.resolve(__dirname, 'loader'), options: { name: 'b' } },
          { loader: path.resolve(__dirname, 'loader'), options: { name: 'c' } },
        ],
      },
      {
        include: [path.resolve(__dirname, 'src')],
        use: [
          { loader: path.resolve(__dirname, 'loader'), options: { name: 'd' } },
          { loader: path.resolve(__dirname, 'loader'), options: { name: 'e' } },
          { loader: path.resolve(__dirname, 'loader'), options: { name: 'f' } },
        ],
      },
      {
        oneOf: [
          {
            test: /\.js$/,
            use: [
              {
                loader: path.resolve(__dirname, 'loader'),
                options: { name: 'g' },
              },
              {
                loader: path.resolve(__dirname, 'loader'),
                options: { name: 'h' },
              },
              {
                loader: path.resolve(__dirname, 'loader'),
                options: { name: 'i' },
              },
            ],
          },
          {
            include: [path.resolve(__dirname, 'src')],
            use: [
              {
                loader: path.resolve(__dirname, 'loader'),
                options: { name: 'j' },
              },
              {
                loader: path.resolve(__dirname, 'loader'),
                options: { name: 'k' },
              },
              {
                loader: path.resolve(__dirname, 'loader'),
                options: { name: 'l' },
              },
            ],
          },
        ],
      },
    ],
  },
};
```

## 結果

```bash
i loader execution
h loader execution
g loader execution
f loader execution
e loader execution
d loader execution
c loader execution
b loader execution
a loader execution
```

執行由後往前，匹配由前往後，因此由最後有 `oneOf` 的設置先執行，並且因為第一個條件符合，所以輸出 `i` `h` `g` ，然後再來是第二的 `f` `e` `d` ，最後才是第一個的 `c` `b` `a` 。
