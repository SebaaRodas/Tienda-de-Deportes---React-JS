import React, { useState, useEffect, useRef, useContext } from "react";
import firebase from "firebase";
import { getFirestore } from "../../firebase/firebase";
import { cartContext } from "../context/CartProvider";

export default function FinalizarCompra() {
    const {sumarCarro, carro} = useContext(cartContext);
    const [total, setTotal] = useState(0);
    const [orderId, setOrderId] = useState('');
    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();

    useEffect(()=>{
        setTotal(sumarCarro());
    }, [total]);
    function handleClick(ev) {
        // ev.preventDefault();
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
            
            <div>
                <h3>Ingresa tus datos:</h3>
                <input type="text" name="name" ref={nameRef} placeholder="Nombre y Apelllido" />
                <br />
                <input type="text" name="mobile" ref={mobileRef} placeholder="Nro de Celular" />
                <br />
                <input type="text" name="email" ref={emailRef} placeholder="Email" />
                <br />
                <input type="text" name="state" ref={stateRef} placeholder="Provincia" />
                <br />
                <input type="text" name="city" ref={cityRef} placeholder="Ciudad" />
                <br />
                <input type="text" name="address" ref={addressRef} placeholder="Direccion" />
                <br />
                <button onClick={() => handleClick()} >Vamos!</button>
            </div>
            {orderId && (<><h1>Felicitaciones tu order es {orderId}</h1><p>El total a pagar es: {total}</p></>)}
        </>
    );
}