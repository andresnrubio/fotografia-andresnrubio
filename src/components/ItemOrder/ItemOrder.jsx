export const ItemOrder = (props) => {
  return (
    <>
      <div className="itemCart">
        <div className="itemCartDetail">
          <img src={props.img1} alt={props.title} />
          <p>
            {props.title} tamaño {props.size}
          </p>
        </div>
        <div className="priceDetail">
          <p className="itemPrice">
            $<span>{props.price}</span> X <span>{props.quantity}</span>
          </p>
        </div>
      </div>
    </>
  );
};
