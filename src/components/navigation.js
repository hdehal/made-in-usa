import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand to={'/'}><span role="img" aria-label="US flag">🇺🇸</span> Made in USA List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/add">Add</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
    }

export default Navigation;