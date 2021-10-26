import App from "./App.js";

import "./styles/index";

const appEle = document.getElementById("app");
appEle.appendChild(new App(appEle).ele);
