// ch05-optimization/01-development/hmr/src/index.js
import _ from 'lodash';
import demoName from './demoName';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', ', ', demoName, '!'], '');

  return element;
}

let element = component();

document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./demoName', function () {
    console.log('Accepting the updated demoName module!');
    console.log(demoName);

    document.body.removeChild(element);

    element = component();

    document.body.appendChild(element);
  });
}
