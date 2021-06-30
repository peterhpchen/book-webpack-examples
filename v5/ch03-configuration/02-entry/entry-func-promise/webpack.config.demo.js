// ch03-configuration/02-entry/entry-func-promise/webpack.config.demo.js
module.exports = {
  entry: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('./app/index.js');
      }, 5000);
    }),
};
