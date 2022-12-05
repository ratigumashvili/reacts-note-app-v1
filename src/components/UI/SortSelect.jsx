const OPTIONS = [
  { name: "Priority", value: "priority" },
  { name: "Date modified", value: "dateModified" },
];

const SortSelect = ({ notes, detectSortValue }) => {
  return (
    <div className="sort-wrapper">
      {notes.length !== 0 && (
        <>
          <label htmlFor="sortSelect">Sort by: </label>
          <select
            id="sortSelect"
            defaultValue={OPTIONS[1].value}
            onChange={(e) => detectSortValue(e.target.value)}
          >
            {OPTIONS.map(({ name, value, order }) => (
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
