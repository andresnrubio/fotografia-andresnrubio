import "./Cart.css";
import { useCart } from "../../Contexts/CartContext";
import { ItemCart } from "../ItemCart/ItemCart";
import { BuyerForm } from "../BuyerForm/BuyerForm";
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { addDoc, collection, getFirestore } from "@firebase/firestore";
import { useEffect } from "react";

export const Cart = () => {
  const { cart, clear } = useCart();

  const total = (cart) => {
    let SubTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      SubTotal = SubTotal + cart[i].quantity * cart[i].price;
    }
    return SubTotal;
  };

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
    adress: "",
  });
  const date = new Date();
  const orderDate = date.toLocaleDateString();

  const [order, setOrder] = useState({});

  useEffect(() => {
    console.log(buyer);
  }, [buyer]);

  const sendOrder = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    console.log(order);
    addDoc(ordersCollection, order).then(({ id }) => {
      console.log(`Se genero su order con el numero ${id}`);
    });
    console.log(order);
    clear();
  };

  const handleSubmit = (event) => {
    console.log(buyer);
    console.log(cart);
    console.log(total(cart));
    console.log(orderDate);

    setOrder({
      buyer: { buyer },
      items: [{ cart }],
      total: total(cart),
      date: orderDate,
    });
    event.preventDefault();
  };

  if (cart.length === 0) {
    return (
      <div className="itemCartEmpty">
        <h2>Su carrito está vacio</h2>
        <p>
          Para seguir comprando, navegue por las categorías en el sitio, o
          busque su producto.
        </p>
        <NavLink to="./">
          <button className="buttonBlue">Elegir productos</button>
        </NavLink>
      </div>
    );
  } else {
    return (
      <>
        <div className="orderView">
          <div className="formContainer">
            <h5>Datos personales</h5>
            <form onSubmit={handleSubmit}>
              <label>Nombre y apellido</label>
              <BuyerForm setBuyer={setBuyer} field="name" buyer={buyer} />
              <label>Telefono</label>
              <BuyerForm setBuyer={setBuyer} field="phone" buyer={buyer} />
              <label>Direccion de envio</label>
              <BuyerForm setBuyer={setBuyer} field="adress" buyer={buyer} />
              <label>Correo Electronico</label>
              <BuyerForm setBuyer={setBuyer} field="email" buyer={buyer} />
              <label>Confirmar Correo Electronico</label>
              <BuyerForm setBuyer={setBuyer} field="email" buyer={buyer} />
              <button type="submit" className="buttonBlue">
                Cargar Pedido
              </button>
            </form>
          </div>

          <div className="itemCartList">
            <h5>Resumen</h5>

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
        </div>
        <div className="subtotalBar">
          <div>
            <button onClick={clear}>Vaciar Carrito</button>
          </div>
          <p>
            Total $<span>{total(cart)}</span>
          </p>
        </div>
        <div className="goToShipping">
          <button onClick={sendOrder} className="buy">
            Terminar mi compra
          </button>
        </div>
      </>
    );
  }
};
