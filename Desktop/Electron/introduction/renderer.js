function bindEvent(id, event, callback) {
  document.getElementById(id).addEventListener(event, callback);
}
function setContent(id, content) {
  document.getElementById(id).innerHTML = content;
}

// dark-mode
bindEvent("toggle-dark-mode", "click", async () => {
  const isDarkMode = await window.darkMode.toggle();
  setContent("theme-source", isDarkMode ? "Dark" : "Light");
});
bindEvent("reset-to-system", "click", async () => {
  await window.darkMode.system();
  setContent("theme-source", "System");
});

// device-access
bindEvent("connect-bluetooth", "click", async () => {
  const btn = document.getElementById("connect-bluetooth");
  btn.setAttribute("disabled", "disabled");
  const device = await navigator.bluetooth.requestDevice({ acceptAllDevices: true });
  btn.removeAttribute("disabled");
  setContent("device-name", device.name || `ID: ${device.id}`);
});

// keyboard Structures
window.addEventListener("keyup", (event) => {
  event.preventDefault();
  console.log(event.key);
});
