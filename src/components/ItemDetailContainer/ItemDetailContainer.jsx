import "./ItemDetailContainer.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";
import { getDoc, doc } from "@firebase/firestore";

export const ItemDetailContainer = () => {
  const { Id } = useParams();
  const [itemDetail, setItemDetail] = useState({});

  useEffect(() => {
    // ESTO ES PARA TRAER UN SOLO ELEMENTO DE LA COLECCION 👀
    const db = getFirestore();

    const itemRef = doc(db, "items", Id);

    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItemDetail(snapshot.data());
      }
    });
  }, [Id]);

  return (
    <div className="container">
      <ItemDetail item={itemDetail} />
    </div>
  );
};
