// ch03-configuration/10-devtool/devtool/src/index.js
import alpha from './const/alpha.js';
import beta from './const/beta.js';

const output = (mainTitle, subTitle) =>
  ['index', mainTitle, subTitle].joi(' - ');

console.log(output(alpha, beta));
