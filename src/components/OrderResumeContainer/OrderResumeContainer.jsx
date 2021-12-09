import "./OrderResumeContainer.css";
import { OrderResume } from "../OrderResume/OrderResume";

export const OrderResumeContainer = (props) => {
  console.log(props);
  return <div className="orderContainer">{<OrderResume />}</div>;
};
