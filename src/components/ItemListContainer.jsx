import "./ItemListContainer.css";
import catalog from "../Catalog.json";
import { ItemList } from "./ItemList.jsx";
import { useEffect, useState } from "react";

export const ItemListContainer = () => {
  const [catalogo, setCatalog] = useState([]);

  const readCatalog = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
          console.log("entre!");
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
  });

  return (
    <div>
      {catalogo.map((item) => (
        <ItemList
          key={item.id}
          initial={item.initial}
          stock={item.stock}
          title={item.title}
          price={item.price}
          img={item.img}
        />
      ))}
    </div>
  );
};
