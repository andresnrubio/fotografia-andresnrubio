import "./ItemDetailContainer.css";
import catalog from "../../Catalog.json";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const ItemDetailContainer = () => {
  const { Id } = useParams();

  const toFind = Id;

  console.log("el ID es " + toFind);

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

  console.log(catalog);

  const itemFound = catalog.find((item) => item.id === { toFind });

  console.log(itemFound);

  return <div>{Detail ? <ItemDetail item={Detail} /> : "Cargando..."}</div>;
};
