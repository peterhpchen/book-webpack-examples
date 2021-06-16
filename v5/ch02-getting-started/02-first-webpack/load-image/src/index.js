// ch02-getting-started/02-first-webpack/load-image/src/index.js
import _ from 'lodash';

import WebpackLogo from 'file-loader!./webpack-logo.png';

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
