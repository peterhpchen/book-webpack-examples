# webpack-init

## package.json

```json
{
  // ...
  "scripts": {
    "init": "webpack init ../created-by-webpack-init"
  },
  "devDependencies": {
    "@webpack-cli/generators": "^2.4.1",
    "webpack": "^5.61.0",
    "webpack-cli": "^4.9.1"
  }
}
```

安裝 `@webpack-cli/generators` 來使用 `webpack init` 指令初始化 webpack 專案。

## 結果

```bash
> webpack init ../created-by-webpack-init

[webpack-cli] ℹ INFO  supplied generation path doesn't exist, required folders will be created.
? Which of the following JS solutions do you want to use? none
? Do you want to use webpack-dev-server? No
? Do you want to simplify the creation of HTML files for your bundle? No
? Do you want to add PWA support? No
? Which of the following CSS solutions do you want to use? none
? Pick a package manager: npm
[webpack-cli] ℹ INFO  Initialising project...
   create ../created-by-webpack-init/package.json
   create ../created-by-webpack-init/src/index.js
   create ../created-by-webpack-init/README.md
   create ../created-by-webpack-init/index.html
   create ../created-by-webpack-init/webpack.config.js
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN my-webpack-project@1.0.0 No repository field.
npm WARN my-webpack-project@1.0.0 No license field.

+ webpack-cli@4.9.1
+ webpack@5.61.0
added 121 packages from 157 contributors and audited 121 packages in 3.502s

17 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

[webpack-cli] Project has been initialised with webpack!
```

執行後，會詢問使用者想要建置的方式，全部回答完後會產生專案，這個例子所產生的專案在 [created-by-webpack-init](../created-by-webpack-init) 。
