// ch03-configuration/03-output/output-publicpath/src/index.js
async function getString() {
  const { default: hello } = await import('./hello.js');

  return hello;
}

getString().then((str) => {
  console.log(str);
});
