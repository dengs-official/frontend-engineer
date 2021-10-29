import App from "./App.js";

import "./styles/index";

const appEle = document.getElementById("app");
new App(appEle);

if (module.hot) {
  module.hot.accept("./App.js", (...argv) => {});
}
