import "./ItemDetailContainer.css";
import catalog from "../../Catalog.json";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";

export const ItemDetailContainer = () => {
  const [Detail, setItemDetail] = useState([]);

  const getItemDetail = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("No se encuentra el producto");
        }
      }, 2000);
    });

  useEffect(() => {
    getItemDetail(catalog)
      .then((result) => {
        setItemDetail(result[0]);
      })
      .catch((err) => console.log(err));
  });

  return <div>{Detail ? <ItemDetail item={Detail} /> : "Cargando..."}</div>;
};
