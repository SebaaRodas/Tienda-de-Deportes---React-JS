import React from "react";
import { useContext } from "react";
import './CartItem.css';
import { cartContext } from "../context/CartProvider";


export default function CartItem({ producto }) {

    const { borrarElemento } = useContext(cartContext);

    return (
        <div className="borde">
            <h3><img src={producto.item.imagen} alt="producto" width={80} height={80} /> {producto.item.titulo} - Cantidad: {producto.cantidad} - Precio: ${producto.item.precio} <button className="boton" onClick={() => borrarElemento(producto.item.id)}>X</button></h3>
        </div>
    )
}