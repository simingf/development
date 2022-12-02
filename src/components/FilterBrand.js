export default function FilterBrand({ setBrand }) {
  return (
    <div className="optionList">
      <p>Filter by Brand:</p>
      <button
        onClick={() => {
          setBrand("All");
        }}
      >
        All Brands
      </button>
      <button
        onClick={() => {
          setBrand("Apple");
        }}
      >
        Apple
      </button>
      <button
        onClick={() => {
          setBrand("Google");
        }}
      >
        Google
      </button>
      <button
        onClick={() => {
          setBrand("Gibson");
        }}
      >
        Gibson
      </button>
      <button
        onClick={() => {
          setBrand("Fender");
        }}
      >
        Fender
      </button>
      <button
        onClick={() => {
          setBrand("Ellies");
        }}
      >
        Ellies
      </button>
      <button
        onClick={() => {
          setBrand("Nothing Cakes");
        }}
      >
        Nothing Cakes
      </button>
    </div>
  );
}
