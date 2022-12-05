import ReactMarkdown from "react-markdown";

import { getDate, getPriority, getIntroText } from "../helpers/helpers";

const Sidebar = ({
  notes,
  handleAddNote,
  handleRemoveNote,
  activeNote,
  setActiveNote,
  setMarker,
}) => {
  const sortedArray = notes.sort((a, b) => b.dateModified - a.dateModified);
  return (
    <section className="col-md-4">
      <header className="sidebar-top">
        <h1>Notes</h1>
        <button onClick={handleAddNote} title="Add note">
          Add note
        </button>
      </header>

      <div className="sidebar-items__wrapper">
        {sortedArray.map(({ id, title, body, dateModified, priority }) => (
          <div
            key={id}
            className={`sidebar-note ${activeNote === id ? "active" : ""}`}
            onClick={() => {
              setActiveNote(id);
            }}
          >
            <div
              className="priority"
              style={{ backgroundColor: getPriority(priority) }}
            ></div>
            <div className="sidebar-note__content">
              <div className="sidebar-note__header">
                <h3>{title}</h3>
                <button
                  onClick={(e) => {
                    handleRemoveNote(id);
                    e.stopPropagation();
                  }}
                  title="Remove note"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="icon trash"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
              <div className="sidebar-note__body">
                <ReactMarkdown>{getIntroText(body)}</ReactMarkdown>
                <div>{getDate(dateModified)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
