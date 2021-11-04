const { contextBridge, ipcRenderer } = require("electron");
contextBridge.exposeInMainWorld("darkMode", {
  toggle: () => ipcRenderer.invoke("dark-mode:toggle"),
  system: () => ipcRenderer.invoke("dark-mode:system"),
});

window.addEventListener("DOMContentLoaded", () => {
  const replaceTextFn = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerHTML = text;
  };
  for (const dependency of ["chrome", "node", "electron"]) {
    replaceTextFn(`${dependency}-version`, process.versions[dependency]);
  }
});
