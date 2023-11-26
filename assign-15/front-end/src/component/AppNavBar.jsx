import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const AppNavBar = () => {
    return (
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">MERN Student Registration App</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">List</NavLink>
                        <NavLink className="nav-link" to="/registration">Registration</NavLink>
                    </Nav>
                </Container>
            </Navbar>
    );
};

export default AppNavBar;