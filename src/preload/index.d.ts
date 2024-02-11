import { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from '@shared/types'

declare global {
  interface Window { 
    // electron 
    context: {
      locale: string
      getNotes: GetNotes
      readNote: ReadNote
      writeNote: WriteNote
      createNote: CreateNote
      deleteNote: DeleteNote
    }
  }
}