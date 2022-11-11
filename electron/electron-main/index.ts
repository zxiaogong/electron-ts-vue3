// electron-main/index.ts
import { app, BrowserWindow, Menu, ipcMain } from "electron";
const NODE_ENV = process.env.NODE_ENV

function createWindow() {
  app.whenReady().then(() => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      frame: false,
      webPreferences: {
        nodeIntegration: true, // 是否完整支持node
        contextIsolation: false,
      },
      show: true
    })
    if (NODE_ENV === 'development') {
      win.loadURL("http://localhost:3000")
    } else {
      win.loadFile("../dist/index.html")
      Menu.setApplicationMenu(null)
    }
    ipcMain.on('window-close', (e, args) => {
      console.log('关闭窗口', args)
      win.close();
    })
  })
}


createWindow()