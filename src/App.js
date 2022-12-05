import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

import uuid from "react-uuid";

import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const handleAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled",
      body: "",
      dateModified: Date.now(),
      priority: "normal",
    };

    setNotes([newNote, ...notes]);
  };

  const handleRemoveNote = (idToDelete) => {
    setNotes(notes.filter(({ id }) => id !== idToDelete));
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
          <Main activeNote={activeNote} />
        </div>
      </div>
    </div>
  );
}

export default App;
