import React from "react";
import foto from "../../multimedia/carousel.jpg";
import messi from "../../multimedia/adidasMessi.jpg";
import cr7 from "../../multimedia/cr7portada.jpg";
import { Carousel } from "react-bootstrap";

export default function Portada(){

    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-40"
                        src={foto}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-40"
                        src={messi}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-40"
                        src={cr7}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}