# rules-multiple

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
        // 1
        use: [
          { loader: path.resolve(__dirname, 'loader'), options: { name: '1' } },
        ],
      },
      {
        // 2
        test: /\.js$/,
        use: [
          { loader: path.resolve(__dirname, 'loader'), options: { name: '2' } },
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
          { loader: path.resolve(__dirname, 'loader'), options: { name: '3' } },
        ],
      },
    ],
  },
};
```

設定三個 loader 的配置，編號 `1` 、 `2` 、 `3` ， `2` 的內部再配置兩個子設定 `2-1` 與 `2-2` 。

## 結果

```bash
3 loader execution
2-2 loader execution
2-1 loader execution
2 loader execution
1 loader execution
```

Loader 執行由後往前，遇到子配置時，由子配置先執行，其順序也是由後往前，子配置都執行完後再執行主配置。
