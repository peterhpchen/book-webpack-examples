import _ from 'lodash';

import WebpackLogo from './webpack-logo.png';

const demoName = 'Load Image By Url';

function logo(url) {
  const element = new Image();

  element.src = url;

  return element;
}

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', ', ', 'world', '!'], '');

  return element;
}

document.body.appendChild(logo(WebpackLogo));
document.body.appendChild(component());
