import React, { useContext } from "react";
import './Carrito.css';
import { cartContext } from "../context/CartProvider";
import CartItem from "./CartItem";


 export default function Carrito(){
    const {carro, borrarCarro} = useContext(cartContext);
    console.log(carro);
    return(
        <>
            {
                (carro.length > 0)?
                <>
                    {carro.map(elemento => <CartItem key={elemento.item.id} producto={elemento} />)}
                    <br />
                    <button className="botonBorrar" onClick={()=>borrarCarro()}>Borrar Carro</button>
                </>
                :
                <>
                    Carro de compras vacío
                </>
            }
        </>
    )
}