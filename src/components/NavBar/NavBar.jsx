import React, { useState, useContext, useEffect } from "react";
import './NavBar.css';
import { Link } from "react-router-dom";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../multimedia/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { cartContext } from "../context/CartProvider";

export default function NavBar() {
    const {sumarCantidad} = useContext(cartContext);
    const [totalCantidad, setTotalCantidad] = useState(0);

    useEffect(()=>{
       setTotalCantidad(sumarCantidad()); 
    },[totalCantidad])

    return (
        <>
            <Navbar className="navbar" bg="danger"  expand="lg">
                <Container>
                    <Navbar.Brand><Link className="detalleLogo" to={'/'}><img src={logo} className="img-fluid logo" width={50} height={50} alt="logo" /> SPORTS SHOP</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="me-auto">
                               
                        </Nav>
                        <Nav>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to={'/productos/camperas'}>Camperas</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={'/productos/remeras'}>Remeras</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={'/productos/shorts'}>Shorts</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Marcas" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to={'/marcas/nike'}>Nike</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={'/marcas/adidas'}>Adidas</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={'/marcas/puma'}>Puma</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={'/marcas/reebok'}>Reebok</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to={'/contacto'}>Contacto</Nav.Link>
                            <Nav.Link as={Link} to={'/carrito'}><CartWidget /><span>{sumarCantidad()}</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}