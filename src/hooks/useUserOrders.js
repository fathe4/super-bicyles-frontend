import { useEffect, useState } from 'react';
import UseAuth from './UseAuth';

const useUserOrders = () => {
    const [userOrders, setUserOrders] = useState([])
    const { isLoading } = UseAuth()

    useEffect(() => {
        // isLoading(true)
        fetch(`https://polar-savannah-40370.herokuapp.com/dashboard/orders`)
            .then(res => res.json())
            .then(data => setUserOrders(data))
        // .finally(() => isLoading(false))
    }, [isLoading])
    return { userOrders, setUserOrders }
};

export default useUserOrders;