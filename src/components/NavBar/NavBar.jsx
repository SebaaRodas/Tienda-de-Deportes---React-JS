import React from "react";
import './NavBar.css'
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../multimedia/logo.png";
import Carrito from "../CartWidget/carrito";
import CartWidget from "../CartWidget/carrito";

export default function NavBar() {
    return (
        <>
            <Navbar className="navbar" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} className="img-fluid logo" width={50} height={50}/> Sports Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="me-auto">
                               
                        </Nav>
                        <Nav>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Zapatillas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Remeras</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Pelotas</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Marcas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Nike</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Adidas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Puma</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Contacto</Nav.Link>
                            <Nav.Link href="#link"><CartWidget /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
    )
}