import "./ItemListContainer.css";
import catalog from "../Catalog.json";
import { ItemList } from "./ItemList.jsx";
import { useEffect, useState } from "react";

export const ItemListContainer = () => {
  const [catalog, setCatalog] = useState([]);

  console.log(catalog);

  const readCatalog = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("No se encuentra el catálogo");
        }
      }, 2000);
    });

  console.log(catalog);

  useEffect(() => {
    readCatalog(catalog)
      .then((result) => setCatalog(result))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      {catalog.map((item) => (
        <ItemList
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
