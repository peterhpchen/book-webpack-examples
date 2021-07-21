// ch07-after-webpack/01-snowpack/snowpack-babel/snowpack.config.js
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: ['@snowpack/plugin-babel'],
};
