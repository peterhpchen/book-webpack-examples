// ch06-inside/03-write-a-loader/add-dependency/src/index.js
const path = require('path');
const fs = require('fs');

module.exports = function (source) {
  const lines = source.split('\n');
  let comment = 'Hello, loader!';
  if (lines[0].indexOf('// ./comment.txt') === 0) {
    const commentPath = path.join(this.context, './comment.txt');
    comment = fs.readFileSync(commentPath, 'utf-8');
    this.addDependency(commentPath);
  }
  lines[0] = `// ${comment}`;
  return lines.join('\n');
};
