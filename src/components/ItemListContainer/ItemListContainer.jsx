import "./ItemListContainer.css";

import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";
import { getDocs, collection } from "@firebase/firestore";

export const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [catalogo, setCatalog] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    getDocs(collection(db, "items")).then((snapshot) => {
      if (!categoryId) {
        setCatalog(snapshot.docs.map((doc) => doc.data()));
      } else {
        setCatalog(
          snapshot.docs
            .map((doc) => doc.data())
            .filter((category) => category.country === categoryId)
        );
      }
    });
  }, [categoryId]);
  console.log(catalogo);
  return (
    <>
      <div>
        <img src="" alt="" />
      </div>
      <div className="itemListContainer">
        <ItemList catalogo={catalogo} />
      </div>
    </>
  );
};
