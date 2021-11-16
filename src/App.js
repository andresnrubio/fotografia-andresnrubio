import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBar />
          </header>
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            <Route path="/item/:Id">
              <ItemDetailContainer />
            </Route>
          </Switch>
          <footer className="App-footer">Hola soy el footer</footer>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
