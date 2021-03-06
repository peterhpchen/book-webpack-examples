// ch03-configuration/09-source-map/without-source-map/src/index.js
import _ from 'lodash';

const demoName = 'Without Source Map';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Webpack Demo', demoName], ': ');

  return element;
}

document.body.appenChild(component());
