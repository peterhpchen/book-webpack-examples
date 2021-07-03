// ch03-configuration/05-module/rules-resource-query/webpack.config.js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        resourceQuery: (query) => query.match(/yo/),
        use: [
          {
            loader: path.resolve(__dirname, 'loader'),
            options: { rule: 'resourceQuery: (query) => query.match(/yo/)' },
          },
        ],
      },
    ],
  },
};
