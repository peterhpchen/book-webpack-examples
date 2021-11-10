# resolve-alias-npm

## src/index.js

```js
import Vue from 'vue/dist/vue.esm.js';

console.log(Vue.version);
```

指定載入 `vue.esm.js` ，藉以引入 compiler 與 runtime ，取得 Vue.js template 功能。

## webpack.config.js

```js
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  stats: {
    orphanModules: true,
  },
};
```

使用別名，將 `vue` 作為 `vue.esm.js` 的別名。

## src/index-alias.js

```js
import Vue from 'vue';

console.log(Vue.version);
```

在配置後 webpack 的別名後，可以直接使用 `vue` 引入 `vue.esm.js` 。
