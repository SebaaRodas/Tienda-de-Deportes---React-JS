import React, { useState } from "react";
import './ItemDetail.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import swal from "sweetalert";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail(props) {

    const [mostrar, setMostrar] = useState(true);
    function onAdd(cantidad) {
        swal('Se ha agregado al carrito correctamente' + " " + cantidad + " " + 'productos');
        setMostrar(false);
    }


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
                            (mostrar) ?
                                <>
                                    <ItemCount stock={props.productos.stock} initial={1} onAdd={onAdd} />
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