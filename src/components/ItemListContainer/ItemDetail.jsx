import React from "react";
import './ItemDetail.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail(props) {



    return (
        <>
            <h3>{props.producto.titulo}</h3>
            <br />
            <Container>
                <Row>
                    <Col><img className="detalleImagen" alt="detalle" src={props.producto.pictureUrl} /></Col>
                    <Col>
                        <p>{props.producto.descripcion}</p>
                        <p>Precio: ${props.producto.precio}</p>
                        {
                            (props.mostrar) ?
                                <>
                                    <ItemCount stock={props.producto.stock} initial={1} onAdd={props.onAdd} />
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