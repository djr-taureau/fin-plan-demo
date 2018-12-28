import { NoteItem } from '../models/note-item';
export interface NotesState {
  status: string;
  ids: string[];
  selectedNoteId: string | null;
  entities: NoteItem[];
}


