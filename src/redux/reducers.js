import { ADD_NOTE, DELETE_NOTE, PIN_NOTE, UNPIN_NOTE } from './actions';

const initialState = {
  notes: [],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, { ...action.payload, id: state.notes.length + 1, pinned: false }],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case PIN_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload ? { ...note, pinned: true } : note
        ),
      };
    case UNPIN_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload ? { ...note, pinned: false } : note
        ),
      };
    default:
      return state;
  }
};

export default noteReducer;
