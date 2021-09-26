import Header from "./components/Header";
import CartList from "./components/CartList";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <Header />

      <main className={classes.main}>
        <h1 className={classes.title}>Your bag</h1>
        <CartList />
      </main>
    </div>
  );
}

export default App;
