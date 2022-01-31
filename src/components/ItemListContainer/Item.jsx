import React from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import './Item.css';
import swal from "sweetalert";
import { Link } from "react-router-dom";

export default function Item(props) {
    function onAdd(){
        swal('Se ha agregado al carrito correctamente!');
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
                    <ItemCount stock={5} initial={1} />
                    <Button className="botonGrande"><Link className="detalles" to={`/detalles/${props.prod.id}`}>Ver detalles</Link></Button>
                    <Button className="botonGrande" onClick={() =>onAdd()}>Agregar al carrito</Button>
                </Card.Body>
            </Card>
            </>
    )
}