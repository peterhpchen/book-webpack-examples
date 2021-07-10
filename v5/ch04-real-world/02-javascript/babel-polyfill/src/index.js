// ch04-real-world/02-javascript/babel-polyfill/src/index.js
const add = (a, b) => {
  // ES2015: Arrow Function
  return a + b;
};

const addAsync = (a, b) =>
  new Promise((resolve, reject) => {
    resolve(a + b);
  });

export default {
  add,
  addAsync,
};
