// ch03-configuration/11-optimization/flag-included-chunks/src/index.js
console.log('index');

const btn = document.createElement('button');
btn.innerHTML = 'SUB';
btn.onclick = function click() {
  import('./sub').then(({ default: sub }) => {
    console.log(sub);
  });
};
document.body.appendChild(btn);

const btn2 = document.createElement('button');
btn2.innerHTML = 'NORMAL';
btn2.onclick = function click() {
  import('./normal').then(({ default: normal }) => {
    console.log(normal);
  });
};
document.body.appendChild(btn2);
