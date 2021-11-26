import path from "path";
import { app, BrowserWindow } from "electron";

const r = (file: string): string => path.resolve(__dirname, file);

let mainWin: BrowserWindow;

function createWindow(): void {
  mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: r("preload.js"),
    },
  });
  // mainWin.loadFile(r("../renderer/index.html"));
  mainWin.loadURL("http://127.0.0.1:9000");
  mainWin.webContents.openDevTools();
}

app.whenReady().then(() => createWindow());

if (process.env.DEBUG === "true") {
  app.commandLine.appendSwitch("remote-debugging-port", "9222");
}
