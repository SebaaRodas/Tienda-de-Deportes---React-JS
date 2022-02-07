import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../multimedia/logo.png";
import carrito from "../../multimedia/carrito.png";

export default function NavBar() {
    return (
        <>
            <Navbar className="navbar" expand="lg">
                <Container>
                    <Navbar.Brand><Link className="detalleLogo" to={'/'}><img src={logo} className="img-fluid logo" width={50} height={50} alt="logo" /> Sports Shop</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="me-auto">
                               
                        </Nav>
                        <Nav>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to={'/productos/zapatillas'}>Zapatillas</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={'/productos/remeras'}>Remeras</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={'/productos/pelotas'}>Pelotas</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Marcas" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to={'/marcas/nike'}>Nike</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={'/marcas/adidas'}>Adidas</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to={'/marcas/puma'}>Puma</Link></NavDropdown.Item>
                            </NavDropdown>
                            {/* <Nav.Link as={Link} to={'/marcas'}>Marcas</Nav.Link> */}
                            <Nav.Link as={Link} to={'/contacto'}>Contacto</Nav.Link>
                            <Nav.Link as={Link} to={'/carrito'}><img src={carrito} className="img-fluid carro" width={30} height={30} alt="carro de compras" /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}