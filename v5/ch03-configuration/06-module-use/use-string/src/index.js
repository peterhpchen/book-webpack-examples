// ch03-configuration/06-module-use/use-string/src/index.js
import css from './style.css';

function style(cssString) {
  const element = document.createElement('style');

  element.innerHTML = cssString;

  return element;
}

document.head.appendChild(style(css.toString()));
