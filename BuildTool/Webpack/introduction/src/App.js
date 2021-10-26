import app from "./App.scss";
import algorithm from "@/assets/algorithm.png";
import image from "@/components/Image/";
const button = import(/* webpackChunkName: 'button' */ "@/components/Button/");
class App {
  constructor(ele) {
    this.data = {};
    this.ele = ele;
    this.ele.classList.add(app.app);
    const navEle = document.createElement("nav");
    navEle.className = app.nav;
    navEle.innerHTML = `
      <ul>
        <li><a href="">首页</a></li>
        <li><a href="">关于</a></li>
      </ul>`;
    this.ele.appendChild(navEle);

    const mainEle = document.createElement("main");
    mainEle.appendChild(image(algorithm));
    this.ele.appendChild(mainEle);
    button.then(({ default: _ }) => {
      console.log(_());
    });
  }
}

export default App;
