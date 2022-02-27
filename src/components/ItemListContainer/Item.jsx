import React, {useState, useContext} from "react";
import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import './Item.css';
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartProvider";

export default function Item(props) {

    const {agregarAlCarro} = useContext(cartContext);
    const [mostrar, setMostrar] = useState(true);

    function onAdd(cantidad) {
        swal(`Producto agregado correctamente! Agregaste: ${props.prod.titulo}, cantidad: ${cantidad}`);
        agregarAlCarro(props.prod, cantidad);
        setMostrar(false);
    }

    return (
        <>
            <Card className="card">
                <Card.Img variant="top" src={props.prod.imagen} />
                <Card.Body>
                    <Card.Title className="centrar">{props.prod.titulo}</Card.Title>
                    <Card.Text className="centrar">
                        ${props.prod.precio}
                    </Card.Text>
                    {
                        (mostrar) ?
                            <>
                                <ItemCount stock={props.prod.stock} initial={1} onAdd={onAdd} />
                            </>
                            :
                            <>
                                <button className="botonGrande"><Link className="carrito" to={"/carrito"}>Ir al Carrito</Link></button>
                            </>
                    }
                    <button className="botonGrande"><Link className="detalles" to={`/detalles/${props.prod.id}`}>Ver detalles</Link></button>
                </Card.Body>
            </Card>
        </>
    )
}