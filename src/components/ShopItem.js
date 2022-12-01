import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ShopItem({ item, cart, setCart, updateCart }) {
  return (
    <Card style={{ width: "10rem", margin: "1rem" }}>
      <Card.Img
        variant="top"
        src={require("../assets/images/" + item.name + ".jpg")}
      />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Brand: {item.brand} <br />
          Type: {item.type} <br />
          Price: ${item.price}
        </Card.Text>
        <Button
          onClick={() => {
            updateCart(cart, setCart, item);
          }}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ShopItem;
