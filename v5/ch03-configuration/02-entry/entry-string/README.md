# entry-string

## webpack.config.demo.js

```js
// ch03-configuration/02-entry/entry-string/webpack.config.demo.js
module.exports = {
  entry: './app/index.js',
};
```

設定 `./app/index.js` 為入口模組。

## package.json

```json
{
  "scripts": {
    "build:argv": "webpack ./app/index.js",
    "build:argv2": "webpack --entry ./app/index.js",
    "build:file": "webpack --config webpack.config.demo.js"
  }
  // ...
}
```

`entry` 為字串值時，在 webpack 中有三個設定方式：

- `build:argv` ：作為第一個參數設定。
- `build:argv2` ：作為 `--entry` 的值設定。
- `build:file` ：使用配置檔的設定。
