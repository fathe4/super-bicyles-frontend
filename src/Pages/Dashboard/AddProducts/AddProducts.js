import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddProducts = () => {
    const [newProduct, setNewProduct] = useState({})
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    // const formData = new FormData()
    let value;

    // const handleOnBlur = (e) => {
    //     const field = e.target.name
    //     value = e.target.value
    //     const newProductDetails = { ...newProduct, url: image }
    //     newProductDetails[field] = value
    //     setNewProduct(newProductDetails)

    // }
    const handleAddProduct = (e) => {
        e.preventDefault()
        if (!image) {
            alert('please upload an image')
            return
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price)
        formData.append('description', description)
        formData.append('url', image)

        console.log(formData, title, image, description);

        // fetch('https://polar-savannah-40370.herokuapp.com/dashboard/addProduct', {
        //     method: 'post',
        //     body: formData
        // })
        //     .then(response => response.json())
        //     .then(result => {
        //         alert('Success:', result);
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });
        fetch('https://polar-savannah-40370.herokuapp.com/dashboard/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added')
                }
            })
    }

    return (
        <div className='container'>

            <Form onSubmit={handleAddProduct} className='shadow p-5 bg-white rounded'>
                <h2>Add A Product</h2>
                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label>Product Title</Form.Label>
                    <Form.Control onChange={e => setTitle(e.target.value)} name='title' type="text" placeholder="Enter Product name" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={e => setPrice(e.target.value)} name='price' type="text" placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control onChange={e => setDescription(e.target.value)} name='description' as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <input accept="image/*" type="file" onChange={(e) => setImage(e.target.files[0])} name='url' />
                    {/* <Form.Control onBlur={handleOnBlur} name='url' type="url" placeholder="Product Image Url" /> */}
                </Form.Group>

                <Button className='shadow' variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddProducts;