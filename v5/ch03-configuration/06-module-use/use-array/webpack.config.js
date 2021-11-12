// ch03-configuration/06-module-use/use-array/webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          (info) => console.log(info.issuer) || 'sass-loader',
        ],
      },
    ],
  },
};
