import "./OrderResumeContainer.css";
import { OrderResume } from "../OrderResume/OrderResume";
import { getFirestore } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react/cjs/react.development";
import { useState } from "react";
import { useParams } from "react-router";

export const OrderResumeContainer = () => {
  const [order, setOrder] = useState({});
  const { orderId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const orderRef = doc(db, "orders", orderId);
    getDoc(orderRef).then((snapshot) => {
      if (snapshot.exists()) {
        setOrder(snapshot.data());
      }
    });
  }, [orderId]);
  console.log(order);
  if (order !== {}) {
    return (
      <>
        <div className="cartTitle">
          <p>Mi pedido</p>
        </div>
        <div className="wv100 line"></div>
        <div className="orderContainer">
          <OrderResume order={order} orderId={orderId} />
        </div>
      </>
    );
  }
};
