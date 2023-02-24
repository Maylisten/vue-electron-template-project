import { ipcMain } from "electron"

export default (app,win)=>{
    ipcMain.on('close-window',()=>{
        app.quit()
    })

    ipcMain.on('minimize-window',_=>{
        win.minimize()
    })
}