import shopData from "../assets/shopData.json";
import { useEffect, useState } from "react";

import FilterType from "./FilterType";
import FilterBrand from "./FilterBrand";
import FilterCost from "./FilterCost";
import Sort from "./Sort";

export function setOptions(setShop, type, brand, low, high, sort) {
  let newShop = [...shopData];
  if (sort === "Ascending") {
    newShop.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sort === "Descending") {
    newShop.sort((a, b) => {
      return b.price - a.price;
    });
  }
  if (type !== "All") {
    newShop = newShop.filter((item) => {
      return item.type === type;
    });
  }
  if (brand !== "All") {
    newShop = newShop.filter((item) => {
      return item.brand === brand;
    });
  }
  newShop = newShop.filter((item) => {
    return item.price >= low && item.price <= high;
  });
  setShop(newShop);
}

export default function Options({ shop, setShop }) {
  const [type, setType] = useState("All");
  const [brand, setBrand] = useState("All");
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(10000);
  const [sort, setSort] = useState("None");

  useEffect(() => {
    setOptions(setShop, type, brand, low, high, sort);
  }, [type, brand, low, high, sort]);

  return (
    <div className="split">
      <button
        onClick={() => {
          setType("All");
          setBrand("All");
          setLow(0);
          setHigh(10000);
          setSort("None");
        }}
      >
        Reset
      </button>
      <div className="optionList">
        <p>Current Options:</p>
        <p>Type: {type}</p>
        <p>Brand: {brand}</p>
        <p>
          Cost: {low} - {high}
        </p>
        <p>Sort: {sort}</p>
      </div>
      <FilterType setType={setType} />
      <FilterBrand setBrand={setBrand} />
      <FilterCost setLow={setLow} setHigh={setHigh} />
      <Sort setSort={setSort} />
    </div>
  );
}
