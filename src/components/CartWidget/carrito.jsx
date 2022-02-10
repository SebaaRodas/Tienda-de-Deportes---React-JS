import React, { useContext, useState, useEffect } from "react";
import './Carrito.css';
import { cartContext } from "../context/CartProvider";
import CartItem from "./CartItem";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


 export default function Carrito(){
    const {carro, borrarCarro, sumarCantidad, sumarCarro, actualizarCantidad, disminuirCantidad} = useContext(cartContext);
    const [total, setTotal] = useState(0);
    const [totalCantidad, setTotalCantidad] = useState(0);
    console.log(carro);
    useEffect(()=>{
        setTotal(sumarCarro());
        setTotalCantidad(sumarCantidad());
    },[]);
    console.log(total, totalCantidad)
    

    return(
        <>
            {
                (carro.length > 0)?
                <>
                    {carro.map(elemento => <CartItem key={elemento.item.id} producto={elemento} />)}
                    <br />
                    <button className="botonBorrar" onClick={()=>borrarCarro()}>Borrar Carro</button>
                    <br /><br />
                    <h4>Total: ${total}</h4>
                    <CartWidget totalCantidad = {totalCantidad} />
                </>
                :
                <>
                    <p>Carro de compras vacío</p>
                    <Link to={'/'}>Ir a comprar!</Link>
                </>
            }
        </>
    )
}