import ShopItem from "./ShopItem";
import { updateCart } from "./Cart";

export default function Shop({ shop, cart, setCart }) {
  return (
    <div className="shop">
      <h2>Shop</h2>
      {shop.map((item) => (
        <ShopItem
          key={item.name}
          item={item}
          cart={cart}
          setCart={setCart}
          updateCart={updateCart}
        />
      ))}
    </div>
  );
}
