export function updateCart(cart, setCart, item) {
  const newCart = { ...cart };
  if (cart[item.name]) {
    newCart[item.name] = {
      count: newCart[item.name].count + 1,
      price: item.price,
    };
  } else {
    newCart[item.name] = {
      count: 1,
      price: item.price,
    };
  }
  setCart(newCart);
}

function removeFromCart(cart, setCart, itemName) {
  const newCart = { ...cart };
  delete newCart[itemName];
  setCart(newCart);
}

function getTotalCost(cart) {
  let sum = 0;
  for (const itemInfo of Object.values(cart)) {
    sum += itemInfo.count * itemInfo.price;
  }
  return sum;
}

export default function Cart({ cart, setCart }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <button onClick={() => {
        setCart({});
      }}>
        Clear Entire Cart
      </button>
      <ul>
        {Object.keys(cart).map((itemName) => (
          <li key={itemName}>
            {cart[itemName].count} x {itemName} (${cart[itemName].price}) = ${cart[itemName].count * cart[itemName].price}
            <br />
            <button
              onClick={() => {
                removeFromCart(cart, setCart, itemName);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Total Cost: ${getTotalCost(cart)}</p>
    </div>
  );
}
