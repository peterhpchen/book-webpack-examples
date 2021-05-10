const demoName = "Simple App";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Book Webpack Examples", demoName], ": ");

  return element;
}

document.body.appendChild(component());
