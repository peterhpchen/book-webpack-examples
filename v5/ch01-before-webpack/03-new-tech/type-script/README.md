# type-script

## index.ts

```ts
// ch01-before-webpack/03-new-tech/type-script/index.ts
function add(a: number, b: number): number {
  return a + b;
}

console.log(add('I', 2));
```

使用 TypeScript 撰寫 `add` 函式，將參數 `a` 、 `b` 與回傳值都設為 `number` 型別。

在叫用時給予 `add` 函式 `'I'` 與 `2` 兩個參數。

## package.json

```json
{
  "scripts": {
    "build": "tsc index.ts"
  }
  // ...
}
```

Scripts `build` 執行 `tsc` 指令，使用 TypeScript compiler 編譯 `index.ts` 。

## 結果

```bash
➜ npm run build

index.ts:6:17 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

6 console.log(add('I', 2));
                  ~~~


Found 1 error.
```

TypeScript 偵測到輸入參數 `'I'` 並非 `number` 型別而拋出錯誤。
