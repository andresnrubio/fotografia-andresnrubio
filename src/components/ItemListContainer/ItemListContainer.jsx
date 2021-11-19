import "./ItemListContainer.css";
// import catalog from "../../Catalog.json";
import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";
import { doc, getDocs, collection } from "@firebase/firestore";
import { setLogLevel } from "@firebase/app";

export const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [catalogo, setCatalog] = useState([]);
  const [filterCatalog, setFilterCatalog] = useState([]);

  // useEffect(() => {
  //   const db = getFirestore();
  //   console.log(db);

  //   const eiffelRef = doc(db, "items", "YxD3UDOKSerjco2y02MR");
  //   getDoc(eiffelRef).then((snapshot) => {
  //     console.log(snapshot);

  //     if (snapshot.exists()) {
  //       console.log(snapshot.data());
  //     }
  //   });
  // }, []);

  useEffect(() => {
    const db = getFirestore();

    getDocs(collection(db, "items")).then((snapshot) => {
      if (!categoryId) {
        setCatalog(snapshot.docs.map((doc) => doc.data()));
      } else {
        setFilterCatalog(
          snapshot.docs
            .map((doc) => doc.data())
            .filter((category) => category.country === categoryId)
        );
        if (!filterCatalog) {
          setCatalog([]);
        } else {
          setCatalog(filterCatalog);
        }
      }
    });
  });

  // const readCatalog = (data) =>
  //   new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (data) {
  //         resolve(data);
  //       } else {
  //         reject("No se encuentra el catálogo");
  //       }
  //     }, 3000);
  //   });

  // useEffect(() => {
  //   readCatalog(catalog)
  //     .then((result) => {
  //       if (!categoryId) {
  //         setCatalog(result);
  //       } else {
  //         const filterCatalog = result.filter(
  //           (category) => category.country === categoryId
  //         );
  //         setCatalog(filterCatalog);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // });

  return (
    <div className="itemListContainer">
      <ItemList catalogo={catalogo} />
    </div>
  );
};
