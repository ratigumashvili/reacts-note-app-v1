import { getDate, getPriority } from "../helpers/helpers";

const Sidebar = ({
  notes,
  handleAddNote,
  handleRemoveNote,
  activeNote,
  setActiveNote,
}) => {
  return (
    <section className="col-md-4">
      <header>
        Sidebar <button onClick={handleAddNote}>Add</button>
      </header>

      {notes.map(({ id, title, body, dateModified, priority }) => (
        <div
          key={id}
          className={`sidebar-note ${activeNote === id ? "active" : ""}`}
          onClick={() => setActiveNote(id)}
        >
          <div
            className="priority"
            style={{ backgroundColor: getPriority(priority) }}
          ></div>
          <div className="sidebar-note__content">
            <div className="sidebar-note__header">
              <h2>{title}</h2>
              <button onClick={() => handleRemoveNote(id)}>x</button>
            </div>
            <div className="sidebar-note__body">
              <p>{body}</p>
              <div>{getDate(dateModified)}</div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Sidebar;
