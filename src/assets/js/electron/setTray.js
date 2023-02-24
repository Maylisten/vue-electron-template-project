import {Tray,Menu} from 'electron'
const path = require('path');
let tray

export default (app,win)=>{
    tray = new Tray(path.join(__static, './img/Keep.png'))
    const contextMenu = Menu.buildFromTemplate([
        {
            label: '最小化到托盘',
            click:()=>{
                win.hide()
            }
        },
        {
            label: '退出',
            click:()=>{
                app.quit()
            }
        },
    ])
    tray.setToolTip('This is my application.')
    tray.setContextMenu(contextMenu)
    tray.on('click', (e) => {
        win.show()
    })
}