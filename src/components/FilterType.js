export default function FilterType({ setType }) {
  return (
    <div className="optionList">
      <p>Filter by Type:</p>
      <button
        onClick={() => {
          setType("All");
        }}
      >
        All Types
      </button>
      <button
        onClick={() => {
          setType("Electronics");
        }}
      >
        Electronics
      </button>
      <button
        onClick={() => {
          setType("Guitars");
        }}
      >
        Guitars
      </button>
      <button
        onClick={() => {
          setType("Cakes");
        }}
      >
        Cakes
      </button>
    </div>
  );
}
