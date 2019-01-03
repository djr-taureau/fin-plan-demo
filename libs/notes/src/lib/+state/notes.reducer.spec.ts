
import { Action } from '@ngrx/store'
import { Load, LoadSuccess, Selected, AddSuccess, UpdateSuccess, NotesActionTypes } from './notes.actions';
import { notesReducer, notesInitialState } from './notes.reducer';
import { NoteItem } from '../models/note-item';
import { selectAllNotes, selectCurrentNoteId,  } from  './notes.selectors';
import { LoadDataStatus } from '@lifeworks/common';
import { IPaginationHeader } from '@lifeworks/common';

const paging: IPaginationHeader = null;
describe('notsReducer', () => {
  it('should return state with unknown action', () => {
    const action = {type: 'DoesNotExist', payload: 'Sample'} as Action;
    const actual = notesReducer(notesInitialState, action as any);
    expect(actual).toEqual(notesInitialState);
  });

  it(`${NotesActionTypes.LoadSuccess} action should replace state with payload`, () => {
    const exampleNotes: NoteItem[] = [{
      guid: "12fee20-6107-4ae4-aea4-8cce1951691e",
      name: "This is a test note",
      note: "Body Content of the Note",
      relatedEntityGuid: "678fc1cf-bbe9-4748-958d-f3881008c5c2",
      reminderDate: null,
      entityContext: 1,
      owner: {
        guid: "bb53a896-1dcc-457c-9619-8a6a0dbe30a2",
        displayName: "Walter White",
            entityType: "Client"
        },
      createdBy: "userString",
      reminderTime: "2018-12-10 22:44:39.7500000",
      timestamps: {
        modifiedOn: null,
        createdOn: null
      }
    }];
    const entities = {
      '12fee20-6107-4ae4-aea4-8cce1951691e': exampleNotes[0]
    };

    const action: LoadSuccess = new LoadSuccess(exampleNotes, paging);
    const state = notesReducer(notesInitialState, action);
    expect(state.entities).toEqual(entities);
  });

  it(`${NotesActionTypes.AddSuccess} action should add Note to state`, () => {
    const addedNote: NoteItem = { guid: "added-Note",
    name: "This is a test note",
    note: "Body Content of the Note",
    relatedEntityGuid: "678fc1cf-bbe9-4748-958d-f3881008c5c2",
    reminderDate: null,
    entityContext: 1,
    owner: {
      guid: "bb53a896-1dcc-457c-9619-8a6a0dbe30a2",
      displayName: "Walter White",
          entityType: "Client"
      },
    createdBy: "userString",
    reminderTime: "2018-12-10 22:44:39.7500000",
    timestamps: {
      modifiedOn: null,
      createdOn: null
    }
    };
    const entities = {
      'added-Note': addedNote
    };

    const action: AddSuccess = new AddSuccess(addedNote);
    const state = notesReducer(notesInitialState, action);
    expect(state.entities).toEqual(entities);
  });

  it(`${NotesActionTypes.UpdateSuccess} action should update Note in state`, () => {
    const existingEntities = { 'existing-Note': {   guid: "12fee20-6107-4ae4-aea4-8cce1951691e",
    name: "This is a test note",
    note: "Body Content of the Note",
    relatedEntityGuid: null,
    reminderDate: null,
    entityContext: 1,
    owner: {
      guid: "bb53a896-1dcc-457c-9619-8a6a0dbe30a2",
      displayName: "Walter White",
          entityType: "Client"
      },
    createdBy: "userString",
    reminderTime: "2018-12-10 22:44:39.7500000",
    timestamps: {
      modifiedOn: null,
      createdOn: null
    }
    }
  };
    const existingState = {...notesInitialState, entities: existingEntities};

    const updatedNote: NoteItem = { guid: 'existing-Note', name: 'Test', note: 'Testing',
    relatedEntityGuid: null,
    reminderDate: null,
    entityContext: 1,
    owner: {
      guid: "bb53a896-1dcc-457c-9619-8a6a0dbe30a2",
      displayName: "Walter White",
          entityType: "Client"
      },
    createdBy: "userString",
    reminderTime: "2018-12-10 22:44:39.7500000",
    timestamps: {
      modifiedOn: null,
      createdOn: null
      }
    };

    const action: UpdateSuccess = new UpdateSuccess(updatedNote);
    const state = notesReducer(existingState, action);
    expect(state.entities['existing-Note']).toEqual(updatedNote);
  });


  it(`${NotesActionTypes.Selected} action should set 'selectedNoteId' in state`, () => {
    const selectedNote = 'Note-id';

    const action: Selected = new Selected(selectedNote);
    const state = notesReducer(notesInitialState, action);
    expect(state.selectedNoteId).toBe(selectedNote);
  });

  describe('selectors', () => {
    it('`selectCurrentNoteId` should get currently selected Note ID', () => {
      const state = {notes: {...notesInitialState, selectedNoteId: '123'}};
      expect(selectCurrentNoteId(state)).toBe('123');
    });
  });
});
