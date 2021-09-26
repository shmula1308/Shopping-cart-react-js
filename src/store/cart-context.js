import React from "react";

const CartContext = React.createContext({
  items: [],
  increaseAmount: () => {},
  decreaseAmount: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export default CartContext;
