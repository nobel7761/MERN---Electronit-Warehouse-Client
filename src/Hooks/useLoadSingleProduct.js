import { useEffect, useState } from "react"

const useLoadSingleProduct = (id) => {

    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://infinite-temple-79245.herokuapp.com/inventory/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [product])

    return [product, setProduct];
}

export default useLoadSingleProduct;