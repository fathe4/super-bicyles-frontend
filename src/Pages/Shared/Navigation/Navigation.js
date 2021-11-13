import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';

const Navigation = () => {
    const { user, logout } = UseAuth()
    return (
        <div>
            <Navbar bg="success" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Super Bicycles</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/bicycles">Bicycles</Nav.Link>
                            {user.email && <Nav.Link as={Link} to="dashboard/myOrders">Dashboard</Nav.Link>}
                            {user.email ? <Button className='shadow' onClick={logout} variant="light">Logout</Button> :
                                <Nav.Link as={Link} to="/login"><Button className='shadow' variant="light">Login</Button></Nav.Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;