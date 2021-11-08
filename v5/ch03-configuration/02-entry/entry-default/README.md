# entry-default

## webpack.config.demo.js

```js
// ch03-configuration/02-entry/entry-default/webpack.config.demo.js
module.exports = {
  // default value
  entry: './src/index.js',
};
```

Webpack 預設的 `entry` 入口點為 `./src/index.js` ，等同於上面的設定，因此如果想要使用此預設值，不需要自己配置 `entry` 。
