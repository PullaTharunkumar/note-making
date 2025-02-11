export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const PIN_NOTE = 'PIN_NOTE';
export const UNPIN_NOTE = 'UNPIN_NOTE';

export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note,
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id,
});

export const pinNote = (id) => ({
  type: PIN_NOTE,
  payload: id,
});

export const unpinNote = (id) => ({
  type: UNPIN_NOTE,
  payload: id,
});
