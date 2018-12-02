import { LoadDataStatus } from '@lifeworks/common';
import { NotesData } from './notes.interfaces';

export const notesInitialState: NotesData = {
	status: LoadDataStatus.initial,
	entities: {}
};
