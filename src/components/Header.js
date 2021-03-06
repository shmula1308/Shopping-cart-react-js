import { useContext } from "react";
import classes from "./Header.module.css";
import CartContext from "../store/cart-context";

const Header = () => {
  const ctx = useContext(CartContext);
  const cartCount = ctx.items.reduce((acc, item) => acc + item.amount, 0);
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logo}>UseReducer</div>
        <div className={classes.icon}>
          <span className={classes["cart-count"]}>{cartCount}</span>
          <svg
            width='35px'
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='shopping-bag'
            className='svg-inline--fa fa-shopping-bag fa-w-14'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'>
            <path
              fill='currentColor'
              d='M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z'></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
