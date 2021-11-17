# dev-server

## package.json

```json
{
  "scripts": {
    "dev": "webpack serve"
  }
  // ...
}
```

使用 `webpack serve` 指令啟動 webpack dev server 。

## webpack.config.js

```js
module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
    static: './dist',
  },
};
```

以 `devServer` 屬性設定 webpack dev server ，開啟伺服器時掛在 8082 ，並給予 `static` 的設定，這樣 devServer 才會知道要去哪裡抓取 `index.html` 。

## 結果

```bash
> webpack serve

<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8082/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.50.139:8082/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:8082/
<i> [webpack-dev-server] Content not from webpack is served from './dist' directory
```

開啟 webpack dev server ，並且預設啟動監控模式，以方便開發。
