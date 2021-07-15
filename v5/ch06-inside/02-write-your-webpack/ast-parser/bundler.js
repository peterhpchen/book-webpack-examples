// ch06-inside/02-write-your-webpack/ast-parser/bundler.js
const fs = require('fs');
const { parse } = require('@babel/parser');

const content = fs.readFileSync('./src/index.js', 'utf-8');
const ast = parse(content, {
  sourceType: 'module',
});

console.log(ast);
