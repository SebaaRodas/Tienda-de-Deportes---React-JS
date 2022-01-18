import React, { useState } from "react";
import './ItemCount.css';
import swal from "sweetalert";


export default function ItemCount(props) {
    const [contador, setContador] = useState(props.initial);
    function onAdd(){
        swal('Se ha agregado al carrito correctamente!');
    }
    return (
        <>
            <div className="botonesContador">
                <button className="botonChico" disabled={contador >= props.stock} onClick={() => setContador(contador + 1)}>+</button>
                <p className="contador">{contador}</p>
                <button className="botonChico" disabled={contador <= props.initial} onClick={() => setContador(contador - 1)}>-</button>
            </div>
            <button className="botonGrande" onClick={() =>onAdd()}>Agregar al carrito</button>
        </>
    )
}