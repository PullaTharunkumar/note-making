import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/actions';
import '../styles/noteForm.css';

function NoteInput() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (title || content) {
      dispatch(addNote({ title, content }));
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="note-input">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="note-title"
      />
      <textarea
        placeholder="Take a note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="note-content"
      />
      <button onClick={handleAddNote} className="add-note-button">
        Add Note
      </button>
    </div>
  );
}

export default NoteInput;
