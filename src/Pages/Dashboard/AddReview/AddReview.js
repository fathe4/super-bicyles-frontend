import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddReview = () => {
    const [newReview, setNewReview] = useState({})

    const handleOnBlur = (e) => {
        const field = e.target.name
        const value = e.target.value
        const newProductDetails = { ...newReview }
        newProductDetails[field] = value
        setNewReview(newProductDetails)

    }
    const handleAddReview = (e) => {
        e.preventDefault()
        console.log(newReview);
        fetch('http://localhost:5000/dashboard/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        }).then()
    }
    return (
        <div className='container'>

            <Form onSubmit={handleAddReview} className='shadow p-5 bg-white rounded'>
                <h2>Add Your Review</h2>
                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onBlur={handleOnBlur} name='name' type="text" placeholder="Your name" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Photo Url</Form.Label>
                    <Form.Control onBlur={handleOnBlur} name='userPhoto' type="url" placeholder="Your Photo Url" />
                </Form.Group>

                <Form.Select onBlur={handleOnBlur} name='rating' className="mb-3" aria-label="Default select example">

                    <option>Your Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Review</Form.Label>
                    <Form.Control onBlur={handleOnBlur} name='review' as="textarea" rows={3} />
                </Form.Group>


                <Button className='shadow' variant="success" type="submit">
                    Add Review
                </Button>
            </Form>
        </div>
    );
};

export default AddReview;