import React from "react";
import './ItemDetail.css';
import { Container, Row, Col } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail(props) {


    return (
        <>

            <br />
            <Container>
                <Row>
                    <Col><img className="detalleImagen" alt="detalle" src={props.producto.imagen} /></Col>
                    <Col>
                        <h3 className="centrarDetalles">{props.producto.titulo}</h3>
                        <p>{props.producto.descripcion}</p>
                        <p>Precio: ${props.producto.precio}</p>
                        <p>Seleccione el talle: <select name="Talle">
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                        </select>
                        </p>
                {
                    (props.mostrar) ?
                        <>
                            <ItemCount stock={props.producto.stock} initial={1} onAdd={props.onAdd} estado={true} />
                        </>
                        :
                        <>
                            <button className="botonGrande"><Link className="carrito" to={"/carrito"}>Ir al Carrito</Link></button>
                        </>
                }
            </Col>
        </Row>
            </Container >
        </>
    )
}