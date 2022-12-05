import ReactMarkdown from "react-markdown";

import PrioritySelect from "./UI/PrioritySelect";

const Main = ({ activeNote, handleUpdateNote }) => {
  const handleEditField = (key, value) => {
    handleUpdateNote({
      ...activeNote,
      [key]: value,
      dateModified: Date.now(),
    });
  };
  return (
    <section className="col-md-8">
      {activeNote ? (
        <div className="main-wrapper">
          <div className="form-wrapper">
            <header className="main-top">
              <input
                type="text"
                value={activeNote.title}
                onChange={(e) => handleEditField("title", e.target.value)}
              />
              <PrioritySelect
                activeNote={activeNote}
                handleEditField={handleEditField}
              />
            </header>
            <textarea
              name=""
              value={activeNote.body}
              onChange={(e) => handleEditField("body", e.target.value)}
            ></textarea>
          </div>
          <div className="preview">
            <h2>{activeNote.title}</h2>
            <ReactMarkdown>{activeNote.body}</ReactMarkdown>
          </div>
        </div>
      ) : (
        <h1>No notes selected</h1>
      )}
    </section>
  );
};

export default Main;
