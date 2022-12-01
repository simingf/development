function sort(shop, setShop, sortType) {
  let newShop = [...shop];
  if (sortType === "asc") {
    newShop.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sortType === "desc") {
    newShop.sort((a, b) => {
      return b.price - a.price;
    });
  }
  setShop(newShop);
}

export default function Sort({ shop, setShop }) {
  return (
    <div className="optionList">
      <p>Sort by Price:</p>
      <button
        onClick={() => {
          sort(shop, setShop, "asc");
        }}
      >
        Ascending
      </button>
      <button
        onClick={() => {
          sort(shop, setShop, "desc");
        }}
      >
        Descending
      </button>
    </div>
  );
}
