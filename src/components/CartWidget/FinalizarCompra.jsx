import React, { useState, useEffect, useRef, useContext } from "react";
import firebase from "firebase";
import { getFirestore } from "../../firebase/firebase";
import { cartContext } from "../context/CartProvider";
import './FinalizarCompra.css';

export default function FinalizarCompra() {
    const { sumarCarro, carro } = useContext(cartContext);
    const [total, setTotal] = useState(0);
    const [orderId, setOrderId] = useState('');
    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();

    useEffect(() => {
        setTotal(sumarCarro());
    }, [carro]);
    function handleClick(event) {
        event.preventDefault();
        const db = getFirestore();
        const orders = db.collection("orders");
        const miOrden = {
            buyer: {
                name: nameRef.current.value,
                address: addressRef.current.value,
                city: cityRef.current.value,
                state: stateRef.current.value,
                email: emailRef.current.value,
                mobile: mobileRef.current.value,
            },
            items: carro,
            total: sumarCarro(),
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }
        orders.add(miOrden)
            .then(({ id }) => {
                console.log('orden ingresada: ' + id);
                setOrderId(id);
            })
            .catch((err) => {
                console.log(err);
            });

    }
    return (
        <>
            <form action="formulario" className="formulario" onSubmit={handleClick} >
                <br />
                <h3 className="centrarTitulo">Ingresa tus datos:</h3>
                <input type="text" name="name" ref={nameRef} placeholder="Nombre y Apelllido" required/>
                <br />
                <input type="number" name="mobile" ref={mobileRef} placeholder="Número de Celular" required/>
                <br />
                <input type="email" name="email" ref={emailRef} placeholder="Email" required/>
                <br />
                <input type="text" name="state" ref={stateRef} placeholder="Provincia" required/>
                <br />
                <input type="text" name="city" ref={cityRef} placeholder="Ciudad" required/>
                <br />
                <input type="text" name="address" ref={addressRef} placeholder="Dirección" required/>
                <br />
                <button type="submit" className="botonEnviar" >ENVIAR</button>
            </form>
            <div className="orden">{orderId && (<><h3>Felicitaciones tu compra ha sido exitosa! Tu orden es {orderId}</h3><p>El total a pagar es: ${total}</p></>)}</div>
        </>
    );
}