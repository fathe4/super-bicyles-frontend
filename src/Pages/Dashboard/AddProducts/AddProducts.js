import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddProducts = () => {
    const [newProduct, setNewProduct] = useState({})


    const handleOnBlur = (e) => {
        const field = e.target.name
        const value = e.target.value
        const newProductDetails = { ...newProduct }
        newProductDetails[field] = value
        setNewProduct(newProductDetails)

    }
    const handleAddProduct = (e) => {
        e.preventDefault()
        console.log(newProduct);
        fetch('http://localhost:5000/dashboard/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        }).then()
    }

    return (
        <div className='container'>

            <Form onSubmit={handleAddProduct} className='shadow p-5 bg-white rounded'>
                <h2>Add A Product</h2>
                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label>Product Title</Form.Label>
                    <Form.Control onBlur={handleOnBlur} name='title' type="text" placeholder="Enter Product name" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control onBlur={handleOnBlur} name='price' type="number" placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control onBlur={handleOnBlur} name='description' as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Product Image Url</Form.Label>
                    <Form.Control onBlur={handleOnBlur} name='url' type="url" placeholder="Product Image Url" />
                </Form.Group>

                <Button className='shadow' variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddProducts;