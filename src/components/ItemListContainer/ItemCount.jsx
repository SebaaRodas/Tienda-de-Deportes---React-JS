import React, { useState } from "react";
import './ItemCount.css';
import { Button } from "react-bootstrap";


export default function ItemCount(props) {
    const [contador, setContador] = useState(props.initial);

    function sumar() {
        if (contador < props.stock) setContador(contador + 1);     
    }
    
    function restar(){
        if(contador > props.initial) setContador(contador - 1);
    }

    return (
        <>
            <div className="botonesContador">
                <button className="botonChico" onClick={() => sumar()}>+</button>
                <p className="contador">{contador}</p>
                <button className="botonChico" onClick={() => restar()}>-</button>
            </div>
            <button className="botonAgregar" onClick={() => props.onAdd(contador)}>Agregar al carrito</button>
        </>
    )
}