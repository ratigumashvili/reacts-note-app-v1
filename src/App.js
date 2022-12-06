import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

import uuid from "react-uuid";

import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [activeNote, setActiveNote] = useState(
    JSON.parse(localStorage.getItem("active")) || false
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("active", JSON.stringify(activeNote));
  }, [notes, activeNote]);

  const handleAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled note",
      body: "",
      dateModified: Date.now(),
      priority: "normal",
    };

    setNotes([newNote, ...notes]);
  };

  const handleUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArray);
  };

  const handleRemoveNote = (idToDelete) => {
    setNotes(notes.filter(({ id }) => id !== idToDelete));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <Sidebar
            notes={notes}
            handleAddNote={handleAddNote}
            handleRemoveNote={handleRemoveNote}
            activeNote={activeNote}
            setActiveNote={setActiveNote}
          />
          <Main
            activeNote={getActiveNote()}
            handleUpdateNote={handleUpdateNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
