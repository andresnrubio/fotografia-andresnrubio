import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Contexts/CartContext";
import { OrderResumeContainer } from "./components/OrderResumeContainer/OrderResumeContainer";
import { CartContainer } from "./components/CartContainer/CartContainer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBar />
          </header>
          <div className="App-main">
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
              <Route path="/carrito">
                <CartContainer />
              </Route>
              <Route path="/orden/:orderId">
                <OrderResumeContainer />
              </Route>
            </Switch>
          </div>
          <footer className="App-footer">
            Impresiones fotograficas Andres N Rubio
          </footer>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
