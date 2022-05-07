import React from 'react';
import BannerPhoto from '../../../../images/front-end-img/banners/slider-1.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <img src={BannerPhoto} alt="" srcset="" />
            <div className='d-flex flex-column justify-content-center align-items-center text-center home-content '>
                <h1>Welcome to Electronics Warehouse</h1>
                <p>Store Your Electronics Accessories Here</p>
                <button className='btn btn-primary w-25'>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;