import "./ItemDetailContainer.css";
import catalog from "../../Catalog.json";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const ItemDetailContainer = () => {
  const { Id } = useParams();

  const [itemDetail, setItemDetail] = useState({});

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
        const found = (result) =>
          result.find((item) => item.id === parseInt(Id));

        setItemDetail(found(result));
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>{itemDetail ? <ItemDetail item={itemDetail} /> : "Cargando..."}</div>
  );
};
