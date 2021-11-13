import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import UseAuth from '../../../hooks/UseAuth';

const ManageProductDetails = ({ product, number }) => {

    const [products, setProducts] = useState([])
    const { setIsLoading } = UseAuth()

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, [])

    // DELETE ORDER
    const deleteOrder = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setIsLoading(true)
            fetch(`http://localhost:5000/dashboard/product/${id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Product Deleted')
                        const remainingProducts = products.filter(productDetail => productDetail._id !== id)
                        setProducts(remainingProducts)
                    }

                })
                .finally(() => setIsLoading(false))
        } else {
            fetch(`http://localhost:5000/dashboard/orders`)
                .then(res => res.json())
                .then(data => setProducts(data))
        }
    }
    return (

        <tr>
            <td>{number + 1}</td>
            <td><img src={product.img} alt="" width='40' /></td>
            <td>{product.title.slice(0, 80)}...</td>
            <td>{product.price}</td>
            <td>
                <ButtonGroup size="sm">
                    <Button variant='danger' className=' rounded' onClick={() => deleteOrder(product._id)} >Delete</Button>
                </ButtonGroup>
            </td>

        </tr>

    );
};

export default ManageProductDetails;