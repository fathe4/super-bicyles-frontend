import { useEffect, useState } from 'react';

const useProductsApi = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => {

                setProduct(data)
            })
    }, [])
    return { products }
};

export default useProductsApi;