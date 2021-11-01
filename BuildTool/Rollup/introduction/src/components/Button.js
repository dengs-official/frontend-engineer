class Button {
  constructor(title, handler) {
    const buttonEle = document.createElement("button");
    buttonEle.innerText = title;
    buttonEle.addEventListener("click", (event) => {
      handler(event);
    });
    this.ele = buttonEle;
  }
}

export default Button;
