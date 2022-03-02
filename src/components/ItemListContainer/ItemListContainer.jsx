import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getFirestore } from "../../firebase/firebase";
import { useParams } from "react-router-dom";

export default function ItemListContainer(props) {
  const { marca, producto } = useParams();
  const [items, setItems] = useState({});

  useEffect(() => {
    const database = getFirestore();
    if (marca) {
      database
        .collection("items")
        .where("marca", "==", `${marca}`)
        .get()
        .then((res) =>
          setItems(
            res.docs.map((item) => ({ ...item.data(), id: item.id }))
          )
        )
        .catch((err) =>
          console.log("CATEGORY: error reading items form firebase => ", err)
        );
    } else {
      database
        .collection("items")
        .get()
        .then((res) =>
          setItems(
            res.docs.map((item) => ({ ...item.data(), id: item.id }))
          )
        )
        .catch((err) =>
          console.log("HOME: error reading items form firebase => ", err)
        );
    }
  }, [marca])

  useEffect(() => {
    const database = getFirestore();
    if (producto) {
      database
        .collection("items")
        .where("tipoProducto", "==", `${producto}`)
        .get()
        .then((res) =>
          setItems(
            res.docs.map((item) => ({ ...item.data(), id: item.id }))
          )
        )
        .catch((err) =>
          console.log("CATEGORY: error reading items form firebase => ", err)
        );
    } else {
      database
        .collection("items")
        .get()
        .then((res) =>
          setItems(
            res.docs.map((item) => ({ ...item.data(), id: item.id }))
          )
        )
        .catch((err) =>
          console.log("HOME: error reading items form firebase => ", err)
        );
    }
  }, [producto])

  return (
    <>
      <ItemList lista={items} />
    </>
  )
}



