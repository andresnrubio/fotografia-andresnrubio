import "./OrderResume.css";

export const OrderResume = () => {
  return (
    <section>
      <h4>Numero de Orden XXXXXXXXXXXX</h4>
      <div className="buyerDetail">
        <p>Nombre y Apellido</p>
        <p>email.comprador@correo.com</p>
        <p>Numero Telefonico</p>
      </div>
      <div>DETALLE DE ORDEN</div>
      <p>Seguimiento Pedido</p>
      <div className="statusBoxContainer">
        <div className="statusBox">
          <p>En preparacion</p>
          <p>01/01/1999</p>
        </div>
        <div className="statusBox">
          <p>Pedido listo</p>
          <p>01/01/1999</p>
        </div>
        <div className="statusBox">
          <p>Enviado</p>
          <p>01/01/1999</p>
        </div>
        <div className="statusBox">
          <p>Entregado</p>
          <p>01/01/1999</p>
        </div>
        <div className="statusBox">
          <p>Orden Completa</p>
          <p>01/01/1999</p>
        </div>
      </div>
    </section>
  );
};
