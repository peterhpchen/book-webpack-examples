// ch03-configuration/06-module-use/use-array/webpack.config.multiple-rules.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: 'style-loader',
      },
      {
        test: /\.scss$/,
        use: {
          loader: 'css-loader',
        },
      },
      {
        test: /\.scss$/,
        use: (info) => console.log(info.issuer) || 'sass-loader',
      },
    ],
  },
};
