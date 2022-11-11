// electron-main/index.ts
import { app, BrowserWindow, Menu } from "electron";
const NODE_ENV = process.env.NODE_ENV

function createWindow() {
  app.whenReady().then(() => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
    })
    if (NODE_ENV === 'development') {
      win.loadURL("http://localhost:3000")
    } else {
      win.loadFile("../dist/index.html")
      Menu.setApplicationMenu(null)
    }
  })

}

createWindow()