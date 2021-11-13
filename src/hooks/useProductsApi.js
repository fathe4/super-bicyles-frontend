import { useEffect, useState } from 'react';

const useProductsApi = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('https://polar-savannah-40370.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {

                setProduct(data)
            })
    }, [])
    return { products }
};

export default useProductsApi;