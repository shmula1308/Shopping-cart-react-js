import Header from "./components/Header";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <main>
        <ul className={classes.list}>
          <li>Telephone</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
