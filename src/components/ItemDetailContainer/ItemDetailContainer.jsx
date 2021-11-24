import "./ItemDetailContainer.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";
import { getDoc, doc } from "@firebase/firestore";

export const ItemDetailContainer = () => {
  const { Id } = useParams();
  console.log(Id);
  const [itemDetail, setItemDetail] = useState({});

  // useEffect(() => {
  //   const db = getFirestore();
  //   console.log(db);

  //   const itemRef = collection(db, "items");
  //   const doc = itemRef.get();

  //   if (!doc.exists) {
  //     console.log("No such document!");
  //   } else {
  //     console.log("Document data:", doc.data());
  //   }
  // }, []);

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
  console.log(itemDetail);

  // const getItemDetail = (data) =>
  //   new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (data) {
  //         resolve(data);
  //       } else {
  //         reject("No se encuentra el producto");
  //       }
  //     }, 2000);
  //   });

  // useEffect(() => {
  //   getItemDetail(catalog)
  //     .then((result) => {
  //       const found = (result) =>
  //         result.find((item) => item.id === parseInt(Id));

  //       setItemDetail(found(result));
  //     })
  //     .catch((err) => console.log(err));
  // });

  return (
    <div class="container">
      {itemDetail ? <ItemDetail item={itemDetail} /> : "Cargando..."}
    </div>
  );
};
