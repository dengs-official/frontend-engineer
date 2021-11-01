const ele = document.getElementById("multiple");

import("./components/Button").then(({ default: Button }) => {
  const button = new Button("按钮", (event) => {
    console.log(event);
  });
  ele.appendChild(button.ele);
});
