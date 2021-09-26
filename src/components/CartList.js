import { Fragment, useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../store/cart-context";
import classes from "./CartList.module.css";

const CartList = () => {
  const ctx = useContext(CartContext);
  const total = ctx.items.reduce((acc, item) => acc + item.price * item.amount, 0).toFixed(2);

  const clearCartHandler = () => {
    ctx.clearCart();
  };
  return (
    <Fragment>
      <ul className={classes.list}>
        {ctx.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              thumbnail={item.thumbnail}
              alt={item.alt}
            />
          );
        })}
      </ul>
      <div className={classes.footer}>
        <span className={classes.label}>Total</span>
        <div className={classes["total-price"]}>${total}</div>
      </div>
      <button className={classes["clear-cart-btn"]} onClick={clearCartHandler}>
        clear cart
      </button>
    </Fragment>
  );
};

export default CartList;
