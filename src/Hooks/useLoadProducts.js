import { useEffect, useState } from "react";

const useLoadProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://infinite-temple-79245.herokuapp.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return [products, setProducts];
}

export default useLoadProducts;