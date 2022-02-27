import React, { useContext, useState, useEffect } from "react";
import './Carrito.css';
import { cartContext } from "../context/CartProvider";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import FinalizarCompra from "./FinalizarCompra";
import { Col, Row, Container } from "react-bootstrap";

export default function Carrito() {
    const { carro, borrarCarro, sumarCantidad, sumarCarro } = useContext(cartContext);
    const [total, setTotal] = useState(0);
    const [totalCantidad, setTotalCantidad] = useState(0);
    console.log(carro);
    useEffect(() => {
        setTotal(sumarCarro());
        setTotalCantidad(sumarCantidad());
    }, [carro]);
    console.log(total, totalCantidad)

    return (
        <>
            {
                (carro.length > 0) ?
                    <>
                        <br />
                        <Container>
                            <Row>
                                <Col>
                                    <h4>Total a pagar: ${total}</h4>
                                    {carro.map(elemento => <CartItem key={elemento.item.id} producto={elemento} />)}
                                    <br />
                                    <button className="botonC" onClick={() => borrarCarro()}>Borrar Carro</button>
                                    <br /><br />
                                </Col>
                                <Col>
                                    {/* <button className="botonC"><Link className="linkCompra" to={"/finalizarCompra"}>FinalizarCompra</Link></button> */}
                                    <FinalizarCompra />
                                </Col>
                            </Row>
                        </Container>
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