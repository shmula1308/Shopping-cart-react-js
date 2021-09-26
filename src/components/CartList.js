import { Fragment } from "react";
import CartItem from "./CartItem";
import classes from "./CartList.module.css";

const CartList = () => {
  return (
    <Fragment>
      <ul className={classes.list}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
      <div className={classes.footer}>
        <span className={classes.label}>Total</span>
        <div className={classes["total-price"]}>$2599.95</div>
      </div>
      <button className={classes["clear-cart-btn"]}>clear cart</button>
    </Fragment>
  );
};

export default CartList;
