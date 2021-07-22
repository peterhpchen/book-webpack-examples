// ch04-real-world/05-module-federation/host-and-remote/host/src/bootstrap.js
import remoteName from 'app_remote/name';
import name from './name.js';

const div = document.createElement('div');
div.innerHTML = `Hello, ${name} and ${remoteName}!`;
document.body.appendChild(div);
