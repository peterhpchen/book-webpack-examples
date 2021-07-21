// ch07-after-webpack/01-snowpack/snowpack-css/src/index.js
import './style.css.proxy.js';
import _ from '../_snowpack/pkg/lodash.js';
import demoName from './demoName.js';

console.log(_.join(['Hi', demoName], ' '));
