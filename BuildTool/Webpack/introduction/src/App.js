import "./App.scss";
class App {
  constructor(ele) {
    this.data = {};
    this.ele = ele;
    const navEle = document.createElement("nav");
    navEle.className = "nav";
    navEle.innerHTML = `
      <ul>
        <li><a href="">首页</a></li>
        <li><a href="">关于</a></li>
      </ul>`;
    this.ele.appendChild(navEle);
  }
}

export default App;
