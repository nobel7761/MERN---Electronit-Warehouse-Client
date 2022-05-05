import React, { useEffect, useState } from 'react';
import './ProductsCarousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ProductsCarousel = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='swiper-slider'
        >
            {
                products.slice(0, 6).map(product => <SwiperSlide key={product._id} className='slider-class'>
                    <img src={product.picture} alt="" srcset="" />
                    <div>
                        <p>{product.name}</p>
                        <p>{product.description.length > 100 ? product.description.slice(0, 100) + '...' : product.description}</p>
                        <p>{product.price}</p>
                        <p>{product.quantity}</p>
                        <p>{product.supplier}</p>
                    </div>
                </SwiperSlide>)
            }



        </Swiper>

    );
};

export default ProductsCarousel;