import React from "react";
import { useContext } from "react";
import './CartItem.css';
import { cartContext } from "../context/CartProvider";
import { Col, Row, Container } from "react-bootstrap";

export default function CartItem({ producto }) {

    const { borrarElemento } = useContext(cartContext);

    return (
        <div className="borde">
            <Container>
                <Row>
                    <Col>
                        <br />
                        <img className="foto" src={producto.item.imagen} alt="producto"/>
                    </Col>
                    <Col>
                        <h5>{producto.item.titulo}</h5>
                        <p>Cantidad: {producto.cantidad}</p>
                        <p>Precio: ${producto.item.precio * producto.cantidad}</p>
                        <button className="boton" onClick={() => borrarElemento(producto.item.id)}>Borrar Producto</button>
                    </Col>
                </Row>
            </Container>
            {/* <h3> {producto.item.titulo} - Cantidad: {producto.cantidad} - Precio: ${producto.item.precio * producto.cantidad}  <button className="boton" onClick={() => borrarElemento(producto.item.id)}>x</button></h3> */}
        </div>
    )
}