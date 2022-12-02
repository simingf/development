import "./App.css";
import { useState } from "react";

import shopData from "./assets/shopData.json";
import Options from "./components/Options";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
  const [shop, setShop] = useState(shopData);
  const [cart, setCart] = useState({});

  return (
    <div id="app">
      <h1>Tech, Guitars, and Cake</h1>
      <Options shop={shop} setShop={setShop} />
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
