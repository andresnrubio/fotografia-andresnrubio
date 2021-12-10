import "./Cart.css";
import { useCart } from "../../Contexts/CartContext";
import { ItemCart } from "../ItemCart/ItemCart";
import { BuyerForm } from "../BuyerForm/BuyerForm";
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

  const date = new Date();
  const orderDate = date.toLocaleDateString();

  const [buyer, setBuyer] = useState({});

  const getBuyer = (data) => {
    setBuyer(data);
    console.log(buyer);
  };

  const [order, setOrder] = useState({});
  const [orderParam, setOrderParam] = useState("");

  const SendOrder = async () => {
    console.log(buyer);
    console.log(order);
    await setOrder({
      buyer: buyer,
      items: cart,
      total: total(cart),
      date: orderDate,
    });

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    console.log(order);

    if (order !== {}) {
      addDoc(ordersCollection, order).then(({ id }) => {
        console.log(`Se genero su order con el numero ${id}`);
        setOrderParam(id);
      });
    }

    // clear();
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
            <BuyerForm getBuyer={getBuyer} />
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
          <button className="buttonBlue" onClick={clear}>
            Vaciar Carrito
          </button>

          <p>
            Total $<span>{total(cart)}</span>
          </p>
        </div>
        <div className="goToShipping">
          {/* <NavLink to={`/orden/${orderParam}`}> */}
          <button onClick={SendOrder} className="buy">
            Terminar mi compra
          </button>

          {/* </NavLink> */}
        </div>
      </>
    );
  }
};
