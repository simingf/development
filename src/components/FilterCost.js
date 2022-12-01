import { useState } from "react";

function filter(shop, setShop, low, high) {
  const newShop = shop.filter((item) => {
    return item.price >= low && item.price <= high;
  });
  console.log(newShop);
  setShop(newShop);
}

export default function FilterType({ shop, setShop }) {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(10000);
  return (
    <div className="optionList">
      <p>Filter by Cost:</p>
      Low:{" "}
      <input
        type="number"
        placeholder="0"
        onChange={(val) => {
          setLow(val.target.value);
        }}
      />
      High:{" "}
      <input
        type="number"
        placeholder="10000"
        onChange={(val) => {
          setHigh(val.target.value);
        }}
      />
      <button
        onClick={() => {
          filter(shop, setShop, low, high);
        }}
      >
        Submit
      </button>
    </div>
  );
}
