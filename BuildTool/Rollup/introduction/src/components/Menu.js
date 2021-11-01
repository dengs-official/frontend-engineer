class Menu {
  constructor(items) {
    const buttonEle = document.createElement("ul");
    buttonEle.innerHTML = items.reduce((prev, curr) => (prev += `<li>${curr}</li>`), "");
    this.ele = buttonEle;
  }
}

export default Menu;
