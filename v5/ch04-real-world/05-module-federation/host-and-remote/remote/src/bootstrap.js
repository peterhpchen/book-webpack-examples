import name from './name.js';

const div = document.createElement('div');
div.innerHTML = `Hello, ${name}!`;
document.body.appendChild(div);
