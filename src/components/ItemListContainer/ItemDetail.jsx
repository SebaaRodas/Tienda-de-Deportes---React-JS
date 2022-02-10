import React from "react";
import './ItemDetail.css';
import { Container, Row, Col, Button } from "react-bootstrap";

import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail(props) {



    return (
        <>
            <h3>{props.productos.nombre} {props.productos.marca}</h3>
            <br />
            <Container>
                <Row>
                    <Col><img className="detalleImagen" alt="detalle" src={props.productos.pictureUrl} /></Col>
                    <Col>
                        <p>{props.productos.descripcion}</p>
                        <p>Precio: ${props.productos.precio}</p>
                        {
                            (props.mostrar) ?
                                <>
                                    <ItemCount stock={props.productos.stock} initial={1} onAdd={props.onAdd} />
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