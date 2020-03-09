import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import DisplayCount from './displayCount';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Link to={'/'}><Navbar.Brand><span role="img" aria-label="US flag">🇺🇸</span> Made in USA List</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/add">Add Company</NavLink>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <DisplayCount />
                <NavLink to="/about">
                    <Button size="sm" variant="secondary">About</Button>
                </NavLink>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;