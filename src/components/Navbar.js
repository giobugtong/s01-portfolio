import React, { useState } from 'react'
import { Navbar, Nav } from "react-bootstrap"

export default function AppNavbar() {

    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar id="navbar" variant="dark" expand="lg" expanded={expanded}>
            <Navbar.Brand href="#home">Brand Name</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => expanded ? setExpanded(false) : setExpanded(true)}/>
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => setExpanded(false)} href="#home">Home</Nav.Link>
                    <Nav.Link onClick={() => setExpanded(false)} href="#about">About</Nav.Link>
                    <Nav.Link onClick={() => setExpanded(false)} href="#contact">Contact</Nav.Link>
                    <Nav.Link onClick={() => setExpanded(false)} href="#products">Products</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}