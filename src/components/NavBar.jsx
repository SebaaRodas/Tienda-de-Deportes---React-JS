import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Inicio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="alinear-derecha">
                        <Nav className="me-auto">
                            <NavDropdown title="Marcas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Nike</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Adidas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Puma</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Zapatillas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Remeras</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Pelotas</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                            <Nav.Link href="#link">Contacto</Nav.Link>
                            <Nav.Link href="#link">Carrito</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}