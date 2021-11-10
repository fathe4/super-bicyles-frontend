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
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                            {user.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
                            <span>{user.displayName}</span>
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