import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import UseAuth from '../../../hooks/UseAuth';
import MyOrderDetails from './MyOrderDetails';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = UseAuth()

    useEffect(() => {
        fetch(`http://localhost:5000/dashboard/orders?userEmail=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    console.log(orders);
    return (
        <div>
            <h2>My Orders</h2>
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {orders.map((order, idx) => <MyOrderDetails key={order._id} number={idx} order={order}></MyOrderDetails>)}


                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;