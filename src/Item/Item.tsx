import { Button } from "@material-ui/core";
import { PinDropSharp } from "@material-ui/icons";
//types
import { cartItemType } from "../App";
//styles
import { Wrapper } from "./Item.styles";

type Props = {
  item: cartItemType;
  handleAddToCart: (clickedItem: cartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart, removeFromCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.desccription}</p>
      <h3>{item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
  </Wrapper>
);

export default Item;
