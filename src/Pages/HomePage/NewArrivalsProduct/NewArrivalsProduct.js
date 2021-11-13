import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewArrivalsProduct = (props) => {
    const { _id, title, price, description, url } = props.product
    return (


        <Col>
            <Card className='border-0 shadow'>
                <Card.Img variant="top" src={url} width='250' height='220' className='w-75 mx-auto p-3' />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 180)}..
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between align-items-center'>
                    <h6>${price}</h6>
                    <Link to={`/products/${_id}`}><Button variant="success" className='shadow' >Buy Now</Button></Link>
                </Card.Footer>
            </Card>
        </Col>

    );
};

export default NewArrivalsProduct;