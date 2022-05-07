import React from 'react';
import useLoadProducts from '../../../../Hooks/useLoadProducts';
import Product from '../../../product/Product';
import './ProductsCarousel.css';

const ProductsCarousel = () => {
    const [products, setProducts] = useLoadProducts();
    return (
        <div className='products-container'>
            {
                products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    )
};

export default ProductsCarousel;