import Menu from "./components/Menu";

const ele = document.getElementById("single");
const menu = new Menu(["首页", "关于"]);

ele.appendChild(menu.ele);
