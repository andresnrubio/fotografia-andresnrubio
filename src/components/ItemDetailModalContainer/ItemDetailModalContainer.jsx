import "./ItemDetailModalContainer.css";
import catalog from "../../Catalog.json";
import { ItemDetailModal } from "../ItemDetailModal/ItemDetailModal";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const ItemDetailModalContainer = () => {
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
      }, 0);
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
    <div>
      {itemDetail ? <ItemDetailModal item={itemDetail} /> : "Cargando..."}
    </div>
  );
};
