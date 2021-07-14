// ch05-optimization/04-production-caching/dependency/src/index.js
import _ from 'lodash';

const component = () => {
  const result = document.createElement('div');
  result.innerHTML = _.join(['Caching'], '');

  return result;
};

document.body.appendChild(component());
