import { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from '@shared/types'
import { contextBridge, ipcRendered } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language,
    getNotes: (...args: Parameters<GetNotes>) => ipcRendered.invoke('get-notes', ...args),
    readNote: (...args: Parameters<ReadNote>) => ipcRendered.invoke('read-note', ...args),
    writeNote: (...args: Parameters<WriteNote>) => ipcRendered.invoke('write-note', ...args),
    createNote: (...args: Parameters<CreateNote>) => ipcRendered.invoke('create-note', ...args),
    deleteNote: (...args: Parameters<DeleteNote>) => ipcRendered.invoke('delete-note', ...args)
})
} catch (error) {
  console.error(error)
}