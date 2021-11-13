import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TestimonialDetails from './TestimonialDetails';

const Testimonial = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://polar-savannah-40370.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // console.log(products);

    return (
        <div>
            <Container>
                <h2 className='text-center text-uppercase spcace-tb'>Our <span className='primary-color'>Testimonials</span></h2>
                <Row xs={1} md={3} className="g-4">


                    {products.map(product => <TestimonialDetails testimonial={product}></TestimonialDetails>)}

                </Row>
            </Container>
        </div>
    );
};

export default Testimonial;