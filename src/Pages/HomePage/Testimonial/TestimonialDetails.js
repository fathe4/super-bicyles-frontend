import React from 'react';
import { Card, Col } from 'react-bootstrap';

import Rating from 'react-rating';

const TestimonialDetails = (props) => {
    const { name, userPhoto, review, rating } = props.testimonial
    return (
        <div>
            <Col>
                <Card className='border-0 shadow text-center'>
                    <div className=' mx-auto p-3 '>
                        <Card.Img className='rounded-pill' width='80' height='80' variant="top" src={userPhoto} />
                    </div>

                    <Card.Body>

                        <Rating
                            initialRating={rating}
                            readonly
                            emptySymbol={<img width='20' src="http://dreyescat.github.io/react-rating/assets/images/star-empty.png" className="icon" alt='' />}
                            fullSymbol={<img width='20' src="http://dreyescat.github.io/react-rating/assets/images/star-full.png" className="icon" alt='' />}
                        />
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {review}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default TestimonialDetails;