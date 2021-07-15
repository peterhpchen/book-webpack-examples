// ch06-inside/02-write-your-webpack/tree-walker/bundler.js
const fs = require('fs');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;

const content = fs.readFileSync('./src/index.js', 'utf-8');
const ast = parse(content, {
  sourceType: 'module',
});

traverse(ast, {
  ImportDeclaration: ({ node }) => {
    console.log(node);
  },
});
