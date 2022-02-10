import React from "react";
import carrito from "../../multimedia/carrito.png";
export default function ContadorCarrito({totalCantidad}){

    return(
        <>
           <img src={carrito} className="img-fluid carro" width={30} height={30} alt="carro de compras"  /><span>{totalCantidad}</span> 
        </>
    )
}