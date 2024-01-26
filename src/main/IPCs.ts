import { ipcMain, shell, IpcMainEvent } from 'electron'
import Constants from './utils/Constants'

/*
 * IPC Communications
 * */
export default class IPCs {
  static initialize(): void {
    // Get application version
    ipcMain.on('msgRequestGetVersion', (event: IpcMainEvent) => {
      event.returnValue = Constants.APP_VERSION
    })

    // Open url via web browser
    ipcMain.on('msgOpenExternalLink', async (event: IpcMainEvent, url: string) => {
      await shell.openExternal(url)
    })
  }
}
