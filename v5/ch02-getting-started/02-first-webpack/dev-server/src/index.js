import _ from 'lodash';

import css from 'css-loader!./style.css';

function style(cssString) {
  const element = document.createElement('style');

  element.innerHTML = cssString;

  return element;
}

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', ', ', 'world', '!'], '');

  return element;
}

document.body.appendChild(style(css.toString()));
document.body.appendChild(component());
