import { useEffect, useState } from "react"

const useLoadSingleProduct = (id) => {

    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])

    return [product, setProduct];
}

export default useLoadSingleProduct;