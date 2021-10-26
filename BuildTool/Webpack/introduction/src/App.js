import app from "./App.scss";
const button = import(/* webpackChunkName: 'button' */ "@/components/Button/");
console.log(app);
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
    button.then(({ default: _ }) => {
      console.log(_());
    });
  }
}

export default App;
