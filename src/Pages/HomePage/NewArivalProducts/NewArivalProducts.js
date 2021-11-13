import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import NewArrivalsProduct from '../NewArrivalsProduct/NewArrivalsProduct';

const NewArrivalsProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://polar-savannah-40370.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, [])

    console.log(products);

    return (
        <div>
            <Container>
                <h2 className='text-center text-uppercase spcace-tb'>New arrivals <span className='primary-color'>Products</span></h2>
                <Row xs={1} md={3} className="g-4">


                    {products.map(product => <NewArrivalsProduct product={product}></NewArrivalsProduct>)}

                </Row>
            </Container>
        </div>
    );
};

export default NewArrivalsProducts;