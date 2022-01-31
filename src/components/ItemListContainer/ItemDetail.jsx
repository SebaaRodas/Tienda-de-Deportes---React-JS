import React from "react";
import './ItemDetail.css';
import { Container, Row, Col, Button } from "react-bootstrap";

export default function ItemDetail({ producto }) {

    return (
        <>
            <h3>{producto.nombre} {producto.marca}</h3>
            <br />
            <Container>
                <Row>
                    <Col><img className="detalleImagen" src={producto.pictureUrl} /></Col>
                    <Col>
                        <p>{producto.descripcion}</p>
                        <p>Precio: ${producto.precio}</p>
                        <Button className="primary">Realizar Compra</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}