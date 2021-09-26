import { useContext } from "react";
import Header from "./components/Header";
import CartContext from "./store/cart-context";
import CartList from "./components/CartList";
import classes from "./App.module.css";

function App() {
  const ctx = useContext(CartContext);

  let content = null;

  if (ctx.items.length > 0) {
    content = <CartList />;
  }
  if (ctx.items.length === 0) {
    content = <p className={classes.emptyCart}>is currently empty</p>;
  }

  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.main}>
        <h1 className={classes.title}>Your bag</h1>
        {content}
      </main>
    </div>
  );
}

export default App;
