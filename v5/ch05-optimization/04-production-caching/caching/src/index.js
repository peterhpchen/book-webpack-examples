// ch05-optimization/04-production-caching/caching/src/index.js
const component = () => {
  const result = document.createElement('div');
  result.innerHTML = 'Caching';

  return result;
};

document.body.appendChild(component());
