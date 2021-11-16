import "./Cart.css";
import { useCart } from "../../Contexts/CartContext";
import { ItemCart } from "../ItemCart/ItemCart";

export const Cart = () => {
  const { cart, clear } = useCart();

  console.log(cart);

  const subtotal = (cart) => {
    let SubTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      SubTotal = SubTotal + cart[i].quantity * cart[i].price;
    }
    return SubTotal;
  };

  if (cart.length === 0) {
    return (
      <section className="cartContainer">
        <div className="itemCartList">
          <h1>El carrito esta Vacio</h1>
        </div>

        <div className="subtotalBar">
          <div>
            <button onClick={clear}>Vaciar Carrito</button>
            <button> Actualizar carrito</button>
          </div>
          <p>
            Total $<span>{subtotal(cart)}</span>
          </p>
        </div>
        <div className="goToShipping">
          {/* <p>
            Envio $<span>XXXX</span>
          </p>
          <p>
            Impuestos $
            <span>
              {(cart) => {
                return subtotal(cart) * 0.21;
              }}
            </span>
          </p>
          <p>
            Total $<span>XXXX</span>
          </p> */}

          <button>Terminar mi compra</button>
        </div>
      </section>
    );
  } else {
    return (
      <section className="cartContainer">
        <div className="itemCartList">
          {cart.length
            ? cart.map((data) => (
                <ItemCart
                  title={data.title}
                  quantity={data.quantity}
                  img1={data.img1}
                  key={data.id}
                  id={data.id}
                  stock={data.stock}
                  price={data.price}
                />
              ))
            : []}
        </div>

        <div className="subtotalBar">
          <div>
            <button onClick={clear}>Vaciar Carrito</button>
            <button> Actualizar carrito</button>
          </div>
          <p>
            Total $<span>{subtotal(cart)}</span>
          </p>
        </div>
        <div className="goToShipping">
          {/* <p>
            Envio $<span>XXXX</span>
          </p>
          <p>
            Impuestos $
            <span>
              {(cart) => {
                return subtotal(cart) * 0.21;
              }}
            </span>
          </p>
          <p>
            Total $<span>XXXX</span>
          </p> */}

          <button>Terminar mi compra</button>
        </div>
      </section>
    );
  }
};
