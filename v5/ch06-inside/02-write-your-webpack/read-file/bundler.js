// ch06-inside/02-write-your-webpack/read-file/bundler.js
const fs = require('fs');

const content = fs.readFileSync('./src/index.js', 'utf-8');

console.log(content);
