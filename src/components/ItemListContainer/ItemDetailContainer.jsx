import React, { useState, useEffect, useContext } from "react";
import './ItemListContainer.css';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { cartContext } from "../context/CartProvider";
import { getFirestore } from "../../firebase/firebase";

export default function ItemDetailContainer() {
    const {agregarAlCarro} = useContext(cartContext); 
    const {id} = useParams();
    const [producto, setProducto] = useState({});
    const [mostrar, setMostrar] = useState(true);
    useEffect(()=>{
        const database = getFirestore();
        const itemCollection = database.collection("items");
        const miItem = itemCollection.doc(`${id}`);
        miItem.get()
        .then((doc)=>{
            if(!doc.exists){
                console.log('no existe el producto');
                return
            }
            setProducto({id: doc.id, ...doc.data()});
        })
        .catch((err)=>{
            console.log(err);
        })
    },[id]);

    function onAdd(cantidad) {
        swal(`Producto agregado correctamente! Agregaste: ${producto.titulo}, cantidad: ${cantidad}`);
        agregarAlCarro(producto, cantidad);
        console.log(`agregaste: ${producto.titulo}, cantidad: ${cantidad}`);
        setMostrar(false);
    }

    return (
        <>
            <ItemDetail producto={producto} onAdd={onAdd} mostrar={mostrar} />   
        </>
    )
    }