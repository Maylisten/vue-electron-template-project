import {Tray,Menu} from 'electron'
const path = require('path');
let tray

export default (app,win)=>{
    tray = new Tray(path.join(__static, './img/logo.png'))
    
    const menuOption = [
        {
            label: '最小化到托盘',
            click:()=>{
                win.hide()
            }
        },
        {
            label: '显示窗口',
            click:()=>{
                win.show()
            }
        },
        {
            label: '退出',
            click:()=>{
                app.quit()
            }
        }
    ]
    const contextMenu = Menu.buildFromTemplate(menuOption)
    tray.setToolTip('This is my application.')
    tray.setContextMenu(contextMenu)
    tray.on('click', (e) => {
        win.show()
    })
}