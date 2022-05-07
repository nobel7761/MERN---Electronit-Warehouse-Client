import { useEffect, useState } from "react";

const useLoadProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return [products, setProducts];
}

export default useLoadProducts;