# gulp-example

## gulpfile.js

```js
// ch01-before-webpack/05-tools/gulp-example/gulpfile.js
const { series } = require('gulp');

function prestart(cb) {
  console.log('Before npm start');
  cb();
}

function start(cb) {
  console.log('Hello npm start');
  cb();
}

function poststart(cb) {
  console.log('After npm start');
  cb();
}

function start2(cb) {
  console.log('Hello npm run start2');
  cb();
}

function poststart2(cb) {
  console.log('After npm run start2');
  cb();
}

exports.start = series(prestart, start, poststart);
exports.start2 = series(prestart, start2, poststart2);
```

Gulp 的配置檔，設定 `prestart` 、 `start` 、 `start2` 、 `poststart` 與 `poststart2` 五個任務，並且設定 `start` 與 `start2` 兩個主任務。

每個主任務由三個任務所組成：

- 主任務 `start` 由 `prestart` 、 `start` 與 `poststart` 組成。
- 主任務 `start2` 由 `prestart` 、 `start2` 與 `poststart2` 組成。

其中 `prestart` 被兩個主任務所共用。

## package.json

```json
{
  // ...
  "scripts": {
    "start": "gulp start",
    "start2": "gulp start2"
  }
  // ...
}
```

命令 `start` 執行 `gulp` 指令執行主任務 `start` ，而命令 `start2` 執行 `gulp` 執行主任務 `start2` 。

## 結果

```bash
➜ npm start

Before npm start

Hello npm start

After npm start
```

```bash
➜ npm run start2

Before npm start

Hello npm start2

After npm start2
```

啟動 Gulp 依序執行個指令。
