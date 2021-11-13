import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import NewArrivalsProduct from '../HomePage/NewArrivalsProduct/NewArrivalsProduct';


const Bicycles = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // console.log(products);

    return (
        <div>
            <Container>
                <h2 className='text-center text-uppercase spcace-tb'>All <span className='primary-color'>Bicycles</span></h2>
                <Row xs={1} md={3} className="g-4">


                    {products.map(product => <NewArrivalsProduct product={product}></NewArrivalsProduct>)}

                </Row>
            </Container>
        </div>
    );
};

export default Bicycles;