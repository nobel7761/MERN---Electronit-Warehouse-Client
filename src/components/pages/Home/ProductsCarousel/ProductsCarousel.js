import React, { useEffect, useState } from 'react';
import Product from '../../../product/Product';
import './ProductsCarousel.css';

const ProductsCarousel = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='products-container'>
            {
                products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    )
};

export default ProductsCarousel;