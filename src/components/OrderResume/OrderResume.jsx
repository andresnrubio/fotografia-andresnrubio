import "./OrderResume.css";

import { ItemOrder } from "../ItemOrder/ItemOrder";
import { Preloader } from "react-materialize";

export const OrderResume = (props) => {
  const orderDetail = props.order;
  const buyerResume = orderDetail.buyer;
  const orderCart = orderDetail.items;

  return (
    <>
      <h4>Numero de seguimiento {props.orderId}</h4>
      <div className="buyerDetail">
        <h5>Tus datos</h5>
        {buyerResume ? (
          <>
            <p>{buyerResume.name}</p>
            <p>{buyerResume.email}</p>
            <p>{buyerResume.phone}</p>
            <p>{buyerResume.adress}</p>{" "}
          </>
        ) : (
          ""
        )}
      </div>
      <div>
        <h5>Detalle de tu pedido</h5>
        {orderCart ? (
          orderCart.map((data) => (
            <ItemOrder
              key={data.id}
              quantity={data.quantity}
              size={data.size}
              title={data.title}
              price={data.price}
              img1={data.img1}
              img2={data.img2}
              img3={data.img3}
            />
          ))
        ) : (
          <Preloader
            active
            color="blue"
            flashing={false}
            size="big"
            className="centerPreloader"
          />
        )}
      </div>
    </>
  );
};
