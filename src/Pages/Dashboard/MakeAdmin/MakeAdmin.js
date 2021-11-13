import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

const MakeAdmin = () => {

    const emailRef = useRef()

    const handleAdminForm = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const userEmail = { email }
        fetch('http://localhost:5000/dashboard/makeAdmin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userEmail)
        })
            .then()
    }
    return (
        <div className='container w-50 mx-auto shadow bg-white p-5 rounded'>
            <Form onSubmit={handleAdminForm}>
                <h2>Make an admin</h2>
                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default MakeAdmin;