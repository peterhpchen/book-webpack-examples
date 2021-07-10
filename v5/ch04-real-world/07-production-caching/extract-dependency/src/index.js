// ch04-real-world/07-production-caching/extract-dependency/src/index.js
import _ from 'lodash';

const component = () => {
  const result = document.createElement('div');
  result.innerHTML = _.join(['Caching', 'ing'], '');

  return result;
};

document.body.appendChild(component());
