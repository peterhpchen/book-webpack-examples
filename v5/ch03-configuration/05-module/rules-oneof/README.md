# rules-oneof

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
        oneOf: [
          {
            // 1
            use: [
              {
                loader: path.resolve(__dirname, 'loader'),
                options: { name: '1' },
              },
            ],
          },
          {
            // 2
            test: /\.js$/,
            use: [
              {
                loader: path.resolve(__dirname, 'loader'),
                options: { name: '2' },
              },
            ],
            rules: [
              {
                // 2-1
                include: path.resolve(__dirname, 'src'),
                use: [
                  {
                    loader: path.resolve(__dirname, 'loader'),
                    options: { name: '2-1' },
                  },
                ],
              },
              {
                // 2-2
                include: path.resolve(__dirname, 'src'),
                use: [
                  {
                    loader: path.resolve(__dirname, 'loader'),
                    options: { name: '2-2' },
                  },
                ],
              },
            ],
          },
          {
            // 3
            test: /\.js$/,
            use: [
              {
                loader: path.resolve(__dirname, 'loader'),
                options: { name: '3' },
              },
            ],
          },
        ],
      },
    ],
  },
};
```

設定 `oneOf` ，其中一個條件成立，則直接跳出，不在往下執行。

## 結果

```bash
1 loader execution
```

條件的判斷是由前往後，與執行相反順序，因此 `1` 的時候已經符合條件了，直接執行並結束 loader 的處理。
