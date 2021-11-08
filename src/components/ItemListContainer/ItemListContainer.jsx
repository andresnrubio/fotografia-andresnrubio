import "./ItemListContainer.css";
import catalog from "../../Catalog.json";
import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";

export const ItemListContainer = () => {
  const [catalogo, setCatalog] = useState([]);

  const readCatalog = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("No se encuentra el catálogo");
        }
      }, 3000);
    });

  useEffect(() => {
    readCatalog(catalog)
      .then((result) => {
        setCatalog(result);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(catalogo);
  return (
    <div className="itemListContainer">
      <ItemList catalogo={catalogo} />
    </div>
  );
};
