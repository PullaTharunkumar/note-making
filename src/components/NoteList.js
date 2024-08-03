import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote, pinNote, unpinNote } from '../redux/actions';
import '../styles/noteList.css';

function NoteList() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handlePin = (id, pinned) => {
    if (pinned) {
      dispatch(unpinNote(id));
    } else {
      dispatch(pinNote(id));
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  const pinnedNotes = notes.filter((note) => note.pinned);
  const otherNotes = notes.filter((note) => !note.pinned);

  return (
    <div className="note-list">
      <div className="pinned-section">
        <h2>Pinned</h2>
        <div className="notes">
          {pinnedNotes.map((note) => (
            <div className="note" key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <button onClick={() => handlePin(note.id, true)}>Unpin</button>
              <button onClick={() => handleDelete(note.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
      <div className="others-section">
        <h2>Others</h2>
        <div className="notes">
          {otherNotes.map((note) => (
            <div className="note" key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <button onClick={() => handlePin(note.id, false)}>Pin</button>
              <button onClick={() => handleDelete(note.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NoteList;
