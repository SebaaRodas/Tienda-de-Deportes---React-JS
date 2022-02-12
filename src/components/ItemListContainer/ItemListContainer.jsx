import React, { useState, useEffect } from "react";
import './ItemListContainer.css';
import ItemList from "./ItemList";
import { getFirestore } from "../../firebase/firebase";
import { useParams } from "react-router-dom";

export default function ItemListContainer(props) {
    const {marca} = useParams();
    const [items, setItems] = useState({});
    // useEffect(()=>{
    //     const db = getFirestore();
    //     const itemCollection = db.collection("items");
    //     itemCollection.get()
    //     .then((querySnapShot)=>{
    //         if (querySnapShot.size == 0){
    //             console.log('no hay documentos en ese query');
    //             return
    //         }
    //         setItems(querySnapShot.docs.map((doc)=> {
    //             return {id: doc.id, ...doc.data()}
    //         }));
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }, [])

    useEffect(()=>{
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
    },[marca])
    console.log(items)
    return (
        <>
            <ItemList lista={items} />
            {/* {JSON.stringify(items)} */}
        </>
    )
}



// arriba del return

 // const [arrayDeProductos, setArrayDeProductos] = useState([]);

    // const stockProductos = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve([
    //             { id: 1, nombre: "Remera", stock: 10, marca: "adidas", descripcion: "Tela de algodón, súper cómodas.",precio: 3000, pictureUrl: "https://assets.adidas.com/images/w_600,f_auto,q_auto/bac60bc110584f7aafb4ac4500f4c67f_9366/Remera_adidas_Designed_To_Move_Logo_Grande_Blanco_GN1479_01_laydown.jpg" },
    //             { id: 2, nombre: "Remera", stock: 4, marca: "nike", descripcion: "Tela de algodón, súper cómodas.", precio: 3500, pictureUrl: "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwc6f4b11c/products/NI_CJ2055-010/NI_CJ2055-010-1.JPG" },
    //             { id: 3, nombre: "Remera", stock: 5, marca: "puma", descripcion: "Tela de algodón, súper cómodas.", precio: 2500, pictureUrl: "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw88ff61a7/products/PU_852419-01/PU_852419-01_1.JPG" },
    //             { id: 4, nombre: "Remera", stock: 5, marca: "reebok", descripcion: "Tela poliéster, ideales para entrenar.", precio: 2000, pictureUrl: "https://megasports.vteximg.com.br/arquivos/ids/185667-1000-1000/41700788001_0.jpg?v=637261041293730000" }
    //         ]);
    //     }, 2000)
    // })

    // useEffect(() => {
    //     stockProductos
    //         .then(res => {
    //             setArrayDeProductos(res);
    //         })
    // }, [])


// en el return
{/* <h3>{props.greeting}</h3>
            <ItemList lista={arrayDeProductos} /> */}


// para categorias
