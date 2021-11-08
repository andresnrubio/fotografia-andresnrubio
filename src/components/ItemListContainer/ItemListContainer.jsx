import "./ItemListContainer.css";
import catalog from "../../Catalog.json";
import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const ItemListContainer = () => {
  const { categoryId } = useParams();
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

  if (!categoryId) {
    return (
      <div className="itemListContainer">
        <ItemList catalogo={catalogo} />
      </div>
    );
  }

  console.log(catalogo);
  return <h1>SOY UNA CATEGORIA</h1>;
};
