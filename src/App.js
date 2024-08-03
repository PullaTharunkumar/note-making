import React from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="sidebar">
          <p>Notes</p>
          <p>Reminders</p>
          <p>Edit labels</p>
          <p>Archive</p>
          <p>Trash</p>
        </div>
        <div className="main-content">
          <NoteForm />
          <NoteList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
