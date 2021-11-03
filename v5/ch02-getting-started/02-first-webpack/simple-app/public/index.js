// ch02-getting-started/02-first-webpack/simple-app/public/index.js
function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', ', ', 'world', '!'], '');

  return element;
}

document.body.appendChild(component());
