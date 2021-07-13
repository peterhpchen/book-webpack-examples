// ch04-real-world/05-production-minimize/optimization-node-env/src/index.js
if (process.env.NODE_ENV === 'production') {
  console.log('production');
}
if (process.env.NODE_ENV === 'development') {
  console.log('development');
}
