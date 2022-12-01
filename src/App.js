import "./App.css";
import { useState } from "react";

import shopData from "./assets/shopData.json";

import FilterType from "./components/FilterType";
import FilterBrand from "./components/FilterBrand";
import FilterCost from "./components/FilterCost";
import Sort from "./components/Sort";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
  const [options, setOptions] = useState([]);
  const [shop, setShop] = useState(shopData);
  const [cart, setCart] = useState([]);

  return (
    <div id="app">
      <h1>Tech, Guitars, and Cake</h1>
      <div className="split">
        <button
          onClick={() => {
            setShop(shopData);
          }}
        >
          Reset
        </button>
        <FilterType shop={shop} setShop={setShop} />
        <FilterBrand shop={shop} setShop={setShop} />
        <FilterCost
          shop={shop}
          setShop={setShop}
        />
        <Sort shop={shop} setShop={setShop} />
      </div>
      <div className="split">
        <div className="shopDiv">
          <Shop shop={shop} cart={cart} setCart={setCart} />
        </div>
        <div className="cartDiv">
          <Cart cart={cart} setCart={setCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
