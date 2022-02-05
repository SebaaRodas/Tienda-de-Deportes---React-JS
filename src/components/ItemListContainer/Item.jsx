import React, {useState} from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import './Item.css';
import swal from "sweetalert";
import { Link } from "react-router-dom";

export default function Item(props) {

    const [mostrar, setMostrar] = useState(true);
    function onAdd(cantidad) {
        swal('Se ha agregado al carrito correctamente' + " " + cantidad + " " + 'productos');
        setMostrar(false);
    }

    return (
        <>
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.prod.pictureUrl} />
                <Card.Body>
                    <Card.Title>{props.prod.nombre} {props.prod.marca}</Card.Title>
                    <Card.Text>
                        ${props.prod.precio}
                    </Card.Text>
                    {
                        (mostrar) ?
                            <>
                                <ItemCount stock={props.prod.stock} initial={1} onAdd={onAdd} />
                            </>
                            :
                            <>
                                <Button className="botonGrande"><Link className="carrito" to={"/carrito"}>Finalizar Compra</Link></Button>
                            </>
                    }
                    <Button className="botonGrande"><Link className="detalles" to={`/detalles/${props.prod.id}`}>Ver detalles</Link></Button>
                </Card.Body>
            </Card>
        </>
    )
}