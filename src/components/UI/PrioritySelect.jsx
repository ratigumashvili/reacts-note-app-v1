const OPTIONS = [
  { name: "Low", value: "low" },
  { name: "Normal", value: "normal" },
  { name: "High", value: "high" },
];

const PrioritySelect = ({ activeNote, handleEditField }) => {
  return (
    <div className="select-wrapper">
      <label htmlFor="prioritySelect">Priority</label>
      <select
        id="prioritySelect"
        defaultValue={activeNote.priority}
        onChange={(e) => handleEditField("priority", e.target.value)}
      >
        {OPTIONS.map(({ value, name }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PrioritySelect;
