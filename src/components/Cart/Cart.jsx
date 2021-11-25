import "./Cart.css";
import { useCart } from "../../Contexts/CartContext";
import { ItemCart } from "../ItemCart/ItemCart";
// import { BuyerForm } from "../BuyerForm/BuyerForm";
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { addDoc, collection, getFirestore } from "@firebase/firestore";

export const Cart = () => {
  const { cart, clear } = useCart();

  const total = (cart) => {
    let SubTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      SubTotal = SubTotal + cart[i].quantity * cart[i].price;
    }
    return SubTotal;
  };

  const [order, setOrder] = useState({});

  const sendOrder = () => {
    setOrder({
      buyer: { name: "Carlos", phone: "1144324411", email: "carlos@mail.com" },
      items: [{ cart }],
      total: total(cart),
    });
    console.log(order);
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) =>
      alert(`Se genero su order con el numero ${id}`)
    );
    clear();
  };

  if (cart.length === 0) {
    return (
      <section className="cartContainer">
        <div className="itemCartList">
          <h1>El carrito esta Vacio</h1>
          <NavLink to="./">
            <button>Ver Catalogo </button>
          </NavLink>
        </div>

        <div className="subtotalBar">
          <div>
            <button> Actualizar carrito</button>
          </div>
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
            Total $<span>{total(cart)}</span>
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

          <button onClick={sendOrder} className="buy">
            Terminar mi compra
          </button>
        </div>
        {/* <div>
          <label>Nombre y apellido</label>
          <BuyerForm />
          <label>Correo Electronico</label>
          <BuyerForm />
          <label>Telefono</label>
          <BuyerForm />
        </div> */}
      </section>
    );
  }
};
