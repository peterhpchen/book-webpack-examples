# npm-scripts

## package.json

```json
{
  // ...
  "scripts": {
    "prestart": "echo \"Before npm start\"",
    "start": "echo \"Hello npm start\"",
    "poststart": "echo \"After npm start\"",
    "prestart2": "echo \"Before npm start\"",
    "start2": "echo \"Hello npm run start2\"",
    "poststart2": "echo \"After npm run start2\""
  }
}
```

Scripts 配置 `start` 與 `start2` 兩個命令，並各別配置 `pre-` script （ `prestart` 與 `prestart2` ）與 `post-` script （ `poststart` 與 `poststart2` ）。

由於命令不能共用，因此雖然 `prestart` 與 `prestart2` 都是相同的指令，但卻要定義兩次。

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

Hello npm run start2

After npm run start2
```

npm 會依照 `pre` 、 `script` 、 `post` 的順序執行命令。
