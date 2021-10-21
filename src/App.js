import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar.jsx";
import { ItemListContainer } from "./components/ItemListContiner.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer greeting="Texto provisorio catalogo" />
      {
        <main className="App-main">
          <img src={logo} className="App-logo" alt="logo" />
        </main>
      }{" "}
    </div>
  );
}

export default App;
