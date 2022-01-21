import React from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import './Item.css'

export default function Item(props) {

    return (
        <div className="contenedor">
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.prod.pictureUrl} />
                <Card.Body>
                    <Card.Title>{props.prod.nombre} {props.prod.marca}</Card.Title>
                    <Card.Text>
                        ${props.prod.precio}
                    </Card.Text>
                    <ItemCount stock={5} initial={1} />
                </Card.Body>
            </Card>
        </div>
    )
}