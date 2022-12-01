function filter(shop, setShop, brand) {
  const newShop = shop.filter((item) => {
    return item.brand === brand;
  });
  setShop(newShop);
}

export default function FilterBrand({ shop, setShop }) {
  return (
    <div className="optionList">
      <p>Filter by Brand:</p>
      <button
        onClick={() => {
          filter(shop, setShop, "Apple");
        }}
      >
        Apple
      </button>
      <button
        onClick={() => {
          filter(shop, setShop, "Google");
        }}
      >
        Google
      </button>
      <button
        onClick={() => {
          filter(shop, setShop, "Gibson");
        }}
      >
        Gibson
      </button>
      <button
        onClick={() => {
          filter(shop, setShop, "Fender");
        }}
      >
        Fender
      </button>
      <button
        onClick={() => {
          filter(shop, setShop, "Ellies");
        }}
      >
        Ellies
      </button>
      <button
        onClick={() => {
          filter(shop, setShop, "Nothing Cakes");
        }}
      >
        Nothing Cakes
      </button>
    </div>
  );
}
