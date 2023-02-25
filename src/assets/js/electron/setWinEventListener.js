export default (app,win)=>{
    win.on('maximize',()=>{
        win.webContents.send('window-maximized')
    })

    win.on('unmaximize',()=>{
        win.webContents.send('window-unmaximize')
    })

}
   