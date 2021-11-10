import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../../hooks/UseAuth';

const Login = () => {
    const [newUser, setNewUser] = useState({})
    const { signIn } = UseAuth()
    const location = useLocation()
    const history = useHistory()

    const handleValues = (e) => {
        const field = e.target.name;
        const value = e.target.value
        const user = { ...newUser }
        user[field] = value
        setNewUser(user)

    }

    const handleLogin = (e) => {
        e.preventDefault()
        signIn(newUser.email, newUser.password, location, history)
    }
    return (
        <div>
            <Container className='w-25 mx-auto shadow p-4 rounded mt-5'>
                <Form onSubmit={handleLogin}>
                    <h2 className='text-center fw-bold'>Login</h2>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' onChange={handleValues} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' onChange={handleValues} type="password" placeholder="Password" />
                    </Form.Group>
                    <Link to='/register'>New User?</Link><br />
                    <Button className="mt-2 w-100" variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;