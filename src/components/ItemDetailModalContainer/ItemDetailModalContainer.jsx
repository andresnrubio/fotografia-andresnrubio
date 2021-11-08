import "./ItemDetailModalContainer.css";
import catalog from "../../Catalog.json";
import { ItemDetailModal } from "../ItemDetailModal/ItemDetailModal";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const ItemDetailModalContainer = () => {
  const { item: id } = useParams();

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

  return (
    <div>{Detail ? <ItemDetailModal item={Detail} /> : "Cargando..."}</div>
  );
};
