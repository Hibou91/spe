// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  saveTheme: (content) => ipcRenderer.invoke('save-theme', content),
  saveThemeJson: (content) => ipcRenderer.invoke('save-theme-json', content),
  openThemeJson: () => ipcRenderer.invoke('open-theme-json')
})