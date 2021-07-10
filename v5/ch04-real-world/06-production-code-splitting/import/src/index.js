// ch04-real-world/06-production-code-splitting/import/src/index.js
import _ from 'lodash';

async function getComponent() {
  const element = document.createElement('div');

  // const { default: demoName } = await import('./demoName.js');
  const { default: demoName } = await import(
    /* webpackChunkName: 'demoName' */ './demoName.js'
  );

  element.innerHTML = _.join(['Webpack Demo', demoName], ': ');

  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
