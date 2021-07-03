// ch03-configuration/05-module/rules-multiple/webpack.config.js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        // 1
        use: [
          { loader: path.resolve(__dirname, 'loader'), options: { name: '1' } },
        ],
      },
      {
        // 2
        test: /\.js$/,
        use: [
          { loader: path.resolve(__dirname, 'loader'), options: { name: '2' } },
        ],
        rules: [
          {
            // 2-1
            include: path.resolve(__dirname, 'src'),
            use: [
              {
                loader: path.resolve(__dirname, 'loader'),
                options: { name: '2-1' },
              },
            ],
          },
          {
            // 2-2
            include: path.resolve(__dirname, 'src'),
            use: [
              {
                loader: path.resolve(__dirname, 'loader'),
                options: { name: '2-2' },
              },
            ],
          },
        ],
      },
      {
        // 3
        test: /\.js$/,
        use: [
          { loader: path.resolve(__dirname, 'loader'), options: { name: '3' } },
        ],
      },
    ],
  },
};
