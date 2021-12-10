import "./BuyerForm.css";
import { FormInput } from "../FormInput/FormInput";
import { useState } from "react";

export const BuyerForm = ({ getBuyer }) => {
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
    adress: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      buyer.email.length < 10 ||
      buyer.name.length < 5 ||
      buyer.phone.length < 8
    ) {
      alert("Verifica los campos ingresados");
      return;
    }

    console.log(buyer);
    getBuyer(buyer);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre y apellido</label>
        <FormInput setBuyer={setBuyer} field="name" buyer={buyer} />
        <label>Telefono</label>
        <FormInput setBuyer={setBuyer} field="phone" buyer={buyer} />
        <label>Direccion de envio</label>
        <FormInput setBuyer={setBuyer} field="adress" buyer={buyer} />
        <label>Correo Electronico</label>
        <FormInput setBuyer={setBuyer} field="email" buyer={buyer} />
        <label>Confirmar Correo Electronico</label>
        <FormInput setBuyer={setBuyer} field="email" buyer={buyer} />
        <button type="submit" className="buttonBlue">
          Cargar Pedido
        </button>
      </form>
    </>
  );
};
