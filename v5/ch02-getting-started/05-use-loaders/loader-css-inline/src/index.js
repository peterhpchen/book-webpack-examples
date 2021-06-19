// ch02-getting-started/05-use-loaders/loader-css-inline/src/index.js
import css from 'css-loader!./style.css';

function style(cssString) {
  const element = document.createElement('style');

  element.innerHTML = cssString;

  return element;
}

document.head.appendChild(style(css.toString()));
