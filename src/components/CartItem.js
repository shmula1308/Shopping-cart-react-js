import { useContext } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../store/cart-context";
import ChevronDown from "./ChevronDown";
import ChevronUp from "./ChevronUp";

const CartItem = (props) => {
  const ctx = useContext(CartContext);

  const addAmountHandler = () => {
    ctx.increaseAmount(props.id);
  };
  const removeAmountHandler = () => {
    ctx.decreaseAmount(props.id);
  };
  const removeItemHandler = () => {
    ctx.removeItem(props.id);
  };
  return (
    <li className={classes.item}>
      <div className={classes.content}>
        <img src={props.thumbnail} alt={props.alt} />
        <div>
          <h4 className={classes.name}>{props.name}</h4>
          <p className={classes.price}>{props.price}</p>
          <button className={classes["remove-btn"]} onClick={removeItemHandler}>
            remove
          </button>
        </div>
      </div>
      <div className={classes.actions}>
        <button className={classes.arrow} onClick={addAmountHandler}>
          <ChevronUp />
        </button>
        <span className={classes.amount}>{props.amount}</span>
        <button className={classes.arrow} onClick={removeAmountHandler}>
          <ChevronDown />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
