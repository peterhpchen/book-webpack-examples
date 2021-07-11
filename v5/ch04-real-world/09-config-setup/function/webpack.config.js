// ch04-real-world/09-config-setup/function/webpack.config.js
module.exports = (webpackEnv) => {
  const isEnvDevelopment = webpackEnv.development;
  const isEnvProduction = webpackEnv.production;

  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  };
};
