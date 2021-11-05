const path = require("path");
const { app, BrowserWindow, Menu, MenuItem, ipcMain, nativeTheme } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  win.loadFile("index.html");

  win.webContents.on("select-bluetooth-device", (event, deviceList, callback) => {
    event.preventDefault();
    console.log(deviceList);
    if (deviceList && deviceList.length > 0) {
      callback(deviceList[0].deviceId);
    }
  });

  win.webContents.on("before-input-event", (event, input) => {
    // event.preventDefault();
    console.log(input);
  });
}

// menu
const menu = new Menu();
menu.append(
  new MenuItem({
    label: "Electron",
    submenu: [
      {
        role: "help",
        accelerator: process.platform === "darwin" ? "Alt+Cmd+H" : "Alt+Shift+H",
        click: () => {
          console.log("Electron rocks!");
        },
      },
    ],
  })
);
// Menu.setApplicationMenu(menu);

// ipc
ipcMain.handle("dark-mode:toggle", () => {
  if (nativeTheme.shouldUseDarkColors) {
    nativeTheme.themeSource = "light";
  } else {
    nativeTheme.themeSource = "dark";
  }
  return nativeTheme.shouldUseDarkColors;
});
ipcMain.handle("dark-mode:system", () => {
  nativeTheme.themeSource = "system";
});

// app life Cycle
app.whenReady().then(createWindow);
// 关闭所有窗口时退出应用 (Windows & Linux)
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
// 如果没有窗口打开则打开一个窗口 (macOS)
app.on("activate", function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
