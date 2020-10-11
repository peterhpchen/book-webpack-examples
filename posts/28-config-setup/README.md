# 配置多模式專案

> 本文講解如何在同一專案中配置多種模式的 webpack 設定。

在開發專案時，會有兩種配置：開發配置及生產配置。開發配置專責於開發階段使用，使工程師得到更好的除錯幫助，有意義的命名模組輸出、 Source Map 、 Hot Module Replacement...等。而生產環境的配置則需要做最佳化、減少體積、切割代碼以提高快取機會...等。但是這兩種環境的配置也並不完全不同，其中對於模組的載入、入口的設定等在兩個環境下是會相同的，這時要如何配置這些配置，又不會讓使用者麻煩是需要特別注意的。

為解決此問題，本文會使用`函式` 、 `webpack-merge` 及 `webpack-chain` 這三種不同的方式說明如何配置 webpack 的配置檔。

## 使用函式設定配置檔

在[使用 CLI 操作 webpack](./07-use-cli/README.md) 中有提到，配置檔可以用函式的方法設定，函式的參數會傳入環境變數，以此來決定各個環境下的設定。