import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Home.css';
import SectionOne from '../../../images/front-end-img/about-1.jpg';
import ProductsCarousel from './ProductsCarousel/ProductsCarousel';

const Home = () => {
    return (
        <div className='home-container'>
            <div className="container">
                <div className="first-section">
                    <Row>
                        <Col>
                            <h1>At <span className='colored-text'>Warehouse</span>, we provide a unique solution for warehousing space for business and consumers</h1>

                            <div className='bottom-line'></div>

                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>

                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                            <button className='btn btn-primary'>Read More</button>
                        </Col>
                        <Col>
                            <img src={SectionOne} alt="" className='img-fluid' />
                        </Col>
                    </Row>
                </div>

                <div className="products-section d-flex flex-column justify-content-center align-items-center">
                    <h2>List of Products <br /> <span className='colored-text'>We Store</span></h2>
                    <div className='bottom-line'></div>
                    <p>Through our experienced operations team we can handle various kind of supply chain operations and services</p>
                </div>

                <ProductsCarousel></ProductsCarousel>
            </div>
        </div>
    );
};

export default Home;