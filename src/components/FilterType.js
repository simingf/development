function filter(shop, setShop, type) {
  const newShop = shop.filter((item) => {
    return item.type === type;
  });
  setShop(newShop);
}

export default function FilterType({ shop, setShop }) {
  return (
    <div className="optionList">
      <p>Filter by Type:</p>
      <button
        onClick={() => {
          filter(shop, setShop, "Electronics");
        }}
      >
        Electronics
      </button>
      <button
        onClick={() => {
          filter(shop, setShop, "Guitars");
        }}
      >
        Guitars
      </button>
      <button
        onClick={() => {
          filter(shop, setShop, "Cakes");
        }}
      >
        Cakes
      </button>
    </div>
  );
}
