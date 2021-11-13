import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import UseAuth from '../../hooks/UseAuth';
import useProductsApi from '../../hooks/useProductsApi';

const SingleProduct = () => {
    const { productId } = useParams()
    const { user } = UseAuth()
    const { products } = useProductsApi()
    const [findProduct, setFindProduct] = useState({})
    const [orderDetails, setOrderDetails] = useState({})

    const nameRef = useRef()
    const emailRef = useRef()
    const addressRef = useRef()
    const address2Ref = useRef()
    const phoneRef = useRef()
    const cityRef = useRef()
    const stateRef = useRef()
    const zipRef = useRef()

    useEffect(() => {
        const searchProduct = products.find(product => product._id === productId)
        setFindProduct(searchProduct)
        // console.log(searchProduct);
    }, [productId, products])

    const handleFields = (e) => {
        const name = nameRef.current.value
        const email = emailRef.current.value
        const address = addressRef.current.value
        const address2 = address2Ref.current.value
        const city = cityRef.current.value
        const state = stateRef.current.value
        const zip = zipRef.current.value
        const phone = phoneRef.current.value
        const userEmail = user.email
        const status = 'Pending'
        const date = new Date().toDateString()
        const newOrder = { name, email, userEmail, address, address2, date, phone, city, state, zip, status, product: { ...findProduct } }

        setOrderDetails(newOrder)
    }

    const handlePlaceOrder = (e) => {
        e.preventDefault()
        fetch('https://polar-savannah-40370.herokuapp.com/dashboard/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order Successfully added')
                }
            })


    }

    const clearForm = () => {
        nameRef.current.value = ''
        emailRef.current.value = ''
        addressRef.current.value = ''
        address2Ref.current.value = ''
        cityRef.current.value = ''
        stateRef.current.value = ''
        zipRef.current.value = ''
        phoneRef.current.value = ''
        user.email = ''
    }



    return (

        <div className='my-5'>

            <Container>
                <Row md={2} xs={1} className="g-4">
                    <Col>
                        <Card className='border-0 shadow'>
                            <Card.Img variant="top" src={findProduct?.url} className='w-75 mx-auto p-3' />
                            <Card.Body>
                                <Card.Title>{findProduct?.title}</Card.Title>
                                <Card.Text>
                                    {findProduct?.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-between align-items-center'>
                                <h6>${findProduct?.price}</h6>

                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col className='shadow p-4'>
                        <Form onSubmit={handlePlaceOrder}>
                            <h3 className='fs-2 fw-bold text-center my-4'>Place Order</h3>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control onChange={handleFields} name='name' ref={nameRef} required defaultValue={user?.displayName} type="text" placeholder="Your Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control onChange={handleFields} name='email' ref={emailRef} required defaultValue={user?.email} type="email" placeholder="Your Email" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>phone</Form.Label>
                                <Form.Control onChange={handleFields} ref={phoneRef} name='phone' type="number" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control onChange={handleFields} ref={addressRef} name='address' required placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control onChange={handleFields} ref={address2Ref} name='address2' placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control onChange={handleFields} ref={cityRef} name='city' required />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control onChange={handleFields} ref={stateRef} name='state' required />
                                </Form.Group>



                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control onChange={handleFields} ref={zipRef} name='zip' required />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check required type="checkbox" label="I agree the terms and condition" />
                            </Form.Group>

                            <Button className='w-100' variant="success" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleProduct;