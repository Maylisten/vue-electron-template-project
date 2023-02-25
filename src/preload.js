import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('ElectronAPI',{
    closeWindow: ()=>{
        ipcRenderer.send('close-window')
    },

    minimizeWindow: ()=>{
        ipcRenderer.send('minimize-window')
    },

    hideWindow: ()=>{
        ipcRenderer.send('hide-window')
    },

    isMaximized:()=>{
        ipcRenderer.send('window-isMaximized')
    }
})
