
import { useEffect, useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import UseAuth from '../../../hooks/UseAuth';
import useUserOrders from '../../../hooks/useUserOrders';



const ManageAllORdersDetail = ({ order, number }) => {
    const { userOrders, setUserOrders } = useUserOrders()
    const { setIsLoading } = UseAuth()



    // DELETE ORDER
    const deleteOrder = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setIsLoading(true)
            fetch(`http://localhost:5000/dashboard/orders/${id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Order Deleted')
                        const remainingOrders = userOrders.filter(order => order._id !== id)
                        setUserOrders(remainingOrders)
                    }

                })
                .finally(() => setIsLoading(false))
        } else {
            fetch(`http://localhost:5000/dashboard/orders`)
                .then(res => res.json())
                .then(data => setUserOrders(data))
        }
    }

    // UPDATE ORDER STATUS
    const updateStatus = (id) => {
        const updateStatus = { status: 'Shipped' }
        fetch(`http://localhost:5000/dashboard/orders/${order._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    setUserOrders(order.status = 'Shipped')
                    alert('Status changed to shipped')
                }

            })

    }


    return (
        <tr>
            <td>{number + 1}</td>
            <td>{order.product?.title.slice(0, 50)}...</td>
            <td>{order.product?.price}</td>
            <td>{order.email}</td>
            <td>{order.address}</td>
            <td>{order.date}</td>
            <td>{order.status}</td>
            <td>
                <ButtonGroup size="sm">
                    <Button variant='success' onClick={updateStatus} className='mx-2 rounded'>Shipped</Button>
                    <Button variant='danger' className=' rounded' onClick={() => deleteOrder(order._id)}>Delete</Button>
                </ButtonGroup>
            </td>

        </tr>
    );
};

export default ManageAllORdersDetail;