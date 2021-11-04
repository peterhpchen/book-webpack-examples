# local-install

## 安裝

```bash
npm install webpack webpack-cli --save-dev
```

安裝 `webpack` 與 `webpack-cli` 。

## package.json

```json
{
  // ...
  "engines": {
    "node": ">=10.13.0"
  }
}
```

另外因為 webpack 5 的需求，需要限制 Node.js 版本不能低於 `10.13.0` 。

## 檢查版本

```bash
> webpack version

webpack: 5.61.0
webpack-cli: 4.9.1
webpack-dev-server not installed
```
