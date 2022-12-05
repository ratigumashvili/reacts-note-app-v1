const OPTIONS = [
  { name: "Priority", value: "priority" },
  { name: "Date modified", value: "dateModified" },
];

const SortSelect = ({ notes }) => {
  return (
    <div className="sort-wrapper">
      {notes.length !== 0 && (
        <>
          <label htmlFor="sortSelect">Sort by: </label>
          <select
            id="sortSelect"
            defaultValue={OPTIONS[1].value}
            onChange={(e) => console.log(e.target.value)}
          >
            {OPTIONS.map(({ name, value }) => (
              <option key={value} value={value}>
                {name}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default SortSelect;
