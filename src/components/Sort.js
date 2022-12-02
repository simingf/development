export default function Sort({ setSort }) {
  return (
    <div className="optionList">
      <p>Sort by Price:</p>
      <button
        onClick={() => {
          setSort("None");
        }}
      >
        None
      </button>
      <button
        onClick={() => {
          setSort("Ascending");
        }}
      >
        Ascending
      </button>
      <button
        onClick={() => {
          setSort("Descending");
        }}
      >
        Descending
      </button>
    </div>
  );
}
