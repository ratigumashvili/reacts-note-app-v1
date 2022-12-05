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
    <div className="col-md-8">
      {activeNote ? (
        <div className="main-wrapper">
          <div className="form-wrapper">
            <div className="top">
              <input
                type="text"
                value={activeNote.title}
                onChange={(e) => handleEditField("title", e.target.value)}
              />
              <PrioritySelect
                activeNote={activeNote}
                handleEditField={handleEditField}
              />
            </div>
            <textarea
              name=""
              value={activeNote.body}
              onChange={(e) => handleEditField("body", e.target.value)}
            ></textarea>
          </div>
          <div className="preview">
            <h2>{activeNote.title}</h2>
            <div>{activeNote.body}</div>
          </div>
        </div>
      ) : (
        <h1>No notes selected</h1>
      )}
    </div>
  );
};

export default Main;
