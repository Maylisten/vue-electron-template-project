import { contextBridge, ipcRenderer } from "electron";

// 存储属性的监听函数
const winStatusListeners = {}

// 添加一个某个属性的监听
function addListener(key,callback){
    winStatusListeners[key]? winStatusListeners[key].push(callback):winStatusListeners[key] = [callback]

}

// 调用某个属性上的所有监听函数
function listenersCallback(key,option){
    if(winStatusListeners[key]&&winStatusListeners[key].length>0){
        winStatusListeners[key].forEach(callback => {
            callback(option)
        });
    }
}


contextBridge.exposeInMainWorld('ElectronAPI', {

    // 退出关闭
    closeWindow: () => {
        ipcRenderer.send('close-window')
    },

    // 缩小到任务栏
    minimizeWindow: () => {
        ipcRenderer.send('minimize-window')
    },

    // 缩小到托盘
    hideWindow: () => {
        ipcRenderer.send('hide-window')
    },

   

    // 放大窗口
    maximizeWindow: () => {
        ipcRenderer.send('maximize-window')

    },

    // 缩小窗口
    restoreWindow: () => {
        ipcRenderer.send('restore-window')
    },

     // 获得win的基本状态信息
    addWinStatusListener : (key,callback) => {
        addListener(key,callback)
    },
})


ipcRenderer.on('window-maximized', () => {
    listenersCallback('isMaximized',true)
})

ipcRenderer.on('window-unmaximize', () => {
    listenersCallback('isMaximized',false)
})
