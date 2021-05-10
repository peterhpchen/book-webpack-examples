import _ from "lodash";

const demoName = "Zero Config";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Books Webpack Examples", demoName], ": ");

  return element;
}

document.body.appendChild(component());
