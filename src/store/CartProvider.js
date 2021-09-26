import { useReducer } from "react";
import CartContext from "./cart-context";

const DUMMY_ITEMS = [
  {
    id: "p1",
    name: "Samsung Galaxy S8",
    price: 399.99,
    amount: 1,
    thumbnail: "/assets/samsung galaxy s8.png",
    alt: "samsung galaxy s8",
  },
  {
    id: "p2",
    name: "Google Pixel",
    price: 499.99,
    amount: 1,
    thumbnail: "/assets/google pixel.png",
    alt: "google pixel",
  },
  {
    id: "p3",
    name: "Xiaomi Redmi Note 2",
    price: 699.99,
    amount: 1,
    thumbnail: "/assets/xiaomi redmi n2.png",
    alt: "xiaomi redmi n2",
  },
  {
    id: "p4",
    name: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1,
    thumbnail: "/assets/samsung galaxy s7.png",
    alt: "samsung galaxy s7",
  },
];

const defaultCartState = {
  items: DUMMY_ITEMS,
};

const cartReducer = (state, action) => {
  if (action.type === "INCREASE") {
    const cartItem = state.items.find((item) => item.id === action.itemId);
    const itemIndex = state.items.findIndex((item) => item.id === action.itemId);

    const updatedItem = {
      ...cartItem,
      amount: cartItem.amount + 1,
    };

    const updateCartItems = [...state.items];
    updateCartItems[itemIndex] = updatedItem;

    return {
      items: updateCartItems,
    };
  }
  if (action.type === "DECREASE") {
    const cartItem = state.items.find((item) => item.id === action.itemId);
    const itemIndex = state.items.findIndex((item) => item.id === action.itemId);

    if (cartItem.amount === 1) {
      const updateCartItems = state.items.filter((item) => item.id !== action.itemId);

      return {
        items: updateCartItems,
      };
    }

    const updatedItem = {
      ...cartItem,
      amount: cartItem.amount - 1,
    };

    const updateCartItems = [...state.items];
    updateCartItems[itemIndex] = updatedItem;

    return {
      items: updateCartItems,
    };
  }

  if (action.type === "REMOVE") {
    const updatedCartItems = state.items.filter((item) => item.id !== action.itemId);

    return {
      items: updatedCartItems,
    };
  }
  if (action.type === "CLEAR") {
    return {
      items: [],
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const increaseAmountHandler = (id) => {
    dispatchCartAction({ type: "INCREASE", itemId: id });
  };
  const decreaseAmountHandler = (id) => {
    dispatchCartAction({ type: "DECREASE", itemId: id });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", itemId: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const context = {
    items: cartState.items,
    increaseAmount: increaseAmountHandler,
    decreaseAmount: decreaseAmountHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
  };

  return <CartContext.Provider value={context}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
