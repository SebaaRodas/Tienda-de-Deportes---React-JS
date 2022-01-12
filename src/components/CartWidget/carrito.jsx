import React from "react";
import './carro.css'
import carrito from "../../multimedia/carrito.png"

export default function CartWidget (){
    return(
        <>
            <img src={carrito} className="img-fluid carro" width={30} height={30}/>
        </>
    )
}