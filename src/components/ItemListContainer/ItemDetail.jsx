import React, { useState } from "react";
import './ItemDetail.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import swal from "sweetalert";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail({ producto }) {

    const [mostrar, setMostrar] = useState(true);

    function onAdd(cantidad) {
        swal('Se ha agregado al carrito correctamente' + ' ' + cantidad + ' ' + 'productos');
        setMostrar(false);
    }


    return (
        <>
            <h3>{producto.nombre} {producto.marca}</h3>
            <br />
            <Container>
                <Row>
                    <Col><img className="detalleImagen" alt="detalle" src={producto.pictureUrl} /></Col>
                    <Col>
                        <p>{producto.descripcion}</p>
                        <p>Precio: ${producto.precio}</p>
                        {
                            (mostrar) ?
                                <>
                                    <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
                                </>
                                :
                                <>
                                    <Button className="botonGrande"><Link className="carrito" to={"/carrito"}>Finalizar Compra</Link></Button>
                                </>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}