import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const MyOrderDetails = ({ order, number }) => {
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
                    <Button variant='danger'>Cancel</Button>
                </ButtonGroup>
            </td>

        </tr>
    );
};

export default MyOrderDetails;