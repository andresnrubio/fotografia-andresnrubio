import "./Item.css";

export const Item = (props) => {
  return (
    <div className="cardProduct">
      <h5>{props.title}</h5>
      <img src={props.img} alt="Foto Prueba" />
      <button className="waves-effect waves-light btn-smal">Descripcion</button>
    </div>
  );
};
