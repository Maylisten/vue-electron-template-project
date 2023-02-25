import { ipcMain } from "electron"

export default (app,win)=>{
    ipcMain.on('close-window',()=>{
        app.quit()
    })

    ipcMain.on('minimize-window',_=>{
        win.minimize()
    })

    ipcMain.on('hide-window',_=>{
        win.hide()
    })

    ipcMain.handle('window-isMaximized', ()=>{
        return win.isMaximized()
    })

    ipcMain.on('maximize-window',_=>{
        win.maximize()
    })

    ipcMain.on('restore-window',_=>{
        win.restore()
    })
}