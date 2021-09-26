import classes from "./CartItem.module.css";
import ChevronDown from "./ChevronDown";
import ChevronUp from "./ChevronUp";

const CartItem = () => {
  return (
    <li className={classes.item}>
      <div className={classes.content}>
        <img src='/assets/google pixel.png' alt='get it dynamically' />
        <div>
          <h4 className={classes.name}>Samsung Galaxy</h4>
          <p className={classes.price}>$499.99</p>
          <button className={classes["remove-btn"]}>remove</button>
        </div>
      </div>
      <div className={classes.actions}>
        <button className={classes.arrow}>
          <ChevronUp />
        </button>
        <span className={classes.amount}>1</span>
        <button className={classes.arrow}>
          <ChevronDown />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
