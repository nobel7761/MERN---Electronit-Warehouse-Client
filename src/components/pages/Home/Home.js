import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Home.css';
import SectionOne from '../../../images/front-end-img/about-1.jpg';
import ProductsCarousel from './ProductsCarousel/ProductsCarousel';
import Banner from '../../Shared/Header/Banner/Banner';
import UniLogo1 from '../../../images/front-end-img/unilogo/uni-1.jpg';
import UniLogo2 from '../../../images/front-end-img/unilogo/uni-2.jpg';
import UniLogo3 from '../../../images/front-end-img/unilogo/uni-3.jpg';
import UniLogo4 from '../../../images/front-end-img/unilogo/uni-4.jpg';
import UniLogo5 from '../../../images/front-end-img/unilogo/uni-5.jpg';
import UniLogo6 from '../../../images/front-end-img/unilogo/uni-6.jpg';
import UniLogo7 from '../../../images/front-end-img/unilogo/uni-7.jpg';
import UniLogo8 from '../../../images/front-end-img/unilogo/uni-8.jpg';
import UniLogo9 from '../../../images/front-end-img/unilogo/uni-9.jpg';
import UniLogo10 from '../../../images/front-end-img/unilogo/uni-10.jpg';
import Strength from '../../../images/front-end-img/strength.jpg';
import Benefits from '../../../images/front-end-img/benefits.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faCarSide, faCircleCheck, faEarthAsia, faShieldHeart, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const Home = () => {
    const [loading] = useAuthState(auth);

    if (loading) {
        <Loading></Loading>
    }

    return (
        <div className='home-container'>
            <Banner></Banner>
            <div className="container">
                <div className="first-section">
                    <div className='row g-0'>
                        <div className='first-section-left-column col-lg-6 col-sm-12'>
                            <h1>At <span className='colored-text'>Warehouse</span>, we provide a unique solution for warehousing space for business and consumers</h1>

                            <div className='bottom-line'></div>

                            <p>The definition of a warehouse is a place where goods are stored. An example of a warehouse is a place where furniture is kept for a furniture company.</p>

                            <p>DEPOSITO is one of the leading warehouse service provider in the world! From the 18th of century it has a great frame in all over the world! Basically, we kept electronic products such as TV, Fridge, AC, Mobile, Laptop, Tablet etc. From the starting of our warehouse journey we never get an objection from our customer about product. We ensure the best security for our cusomets product!</p>

                            <button className='btn btn-primary first-section-btn'>Read More</button>
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <img src={SectionOne} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='second-section py-5'>
                <div className="container">
                    <div className="products-section d-flex flex-column justify-content-center align-items-center">
                        <h2>List of Products <br /> <span className='colored-text'>We Store</span></h2>
                        <div className='bottom-line'></div>
                        <p>Through our experienced operations team we can handle various kind of supply chain operations and services</p>
                    </div>
                    <div className='my-5'>
                        <ProductsCarousel></ProductsCarousel>
                        <div className='d-flex flex-row-reverse py-5 second-section-bottom-btn'>
                            <Link to='/manage-inventories'>
                                <Button variant="outline-dark" className='manage-btn py-2'>Manage Inventories<FontAwesomeIcon icon={faArrowRightLong} className='ps-2' /></Button>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="third-section py-5">
                <div className="d-flex flex-column justify-content-center align-items-center text-center pb-5">
                    <h2>Some Of Our <br /> <span className='colored-text'>Reputed Clients</span></h2>
                    <div className='bottom-line'></div>
                    <p className='py-4 w-25 third-section-p'>We are currently servicing clients across the sectors of FMCG, Consumer Goods, Retail, B2B and Technology</p>
                    <div className="unilogo my-5">
                        <div>
                            <img src={UniLogo1} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={UniLogo2} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={UniLogo3} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={UniLogo4} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={UniLogo5} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={UniLogo6} alt="" srcset="" />
                        </div>
                        <div></div>
                        <div>
                            <img src={UniLogo7} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={UniLogo8} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={UniLogo9} alt="" srcset="" />
                        </div>
                        <div>
                            <img src={UniLogo10} alt="" srcset="" />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div className="fourth-section">
                <div className="row g-0">
                    <div className="col-lg-6">
                        <img src={Strength} alt="" srcset="" className='img-fluid' />
                    </div>
                    <div className="col-lg-6 p-5">
                        <h2 className='mb-3'>Our <span className='colored-text'>Strength</span></h2>
                        <div className='bottom-line mb-3'></div>
                        <p className='mb-3'>Our objective is to Reduce our clients overall Logistics Cost and Increase their Customer Order Servicability</p>
                        <ul>
                            <li className='mb-2'>
                                <FontAwesomeIcon icon={faCircleCheck} className='me-2 fourth-section-icon' />
                                We provides the security of our customers product!
                            </li>
                            <li className='mb-2'>
                                <FontAwesomeIcon icon={faCircleCheck} className='me-2 fourth-section-icon' />
                                In our policy we have 80% money back guarantee if the product is damaged!
                            </li>
                            <li className='mb-2'>
                                <FontAwesomeIcon icon={faCircleCheck} className='me-2 fourth-section-icon' />
                                Achieve worlds best warehouse service provider in 2010.
                            </li>
                            <li className='mb-2'>
                                <FontAwesomeIcon icon={faCircleCheck} className='me-2 fourth-section-icon' />
                                We have separate space for different kind of products.
                            </li>
                            <li className='mb-2'>
                                <FontAwesomeIcon icon={faCircleCheck} className='me-2 fourth-section-icon' />
                                We make sure the best services for our client.
                            </li>
                            <li className='mb-2'>
                                <FontAwesomeIcon icon={faCircleCheck} className='me-2 fourth-section-icon' />
                                More than 10 thousands clients we have served in the last year.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 p-5">
                        <h2 className='mb-3'>Customer <span className='colored-text'>Benefits</span></h2>
                        <div className='bottom-line mb-3'></div>
                        <p className='mb-3'>Our objective is to Reduce our clients overall Logistics Cost and Increase their Customer Order Servicability</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className='icon-background d-flex justify-content-center align-items-center mb-2'>
                                    <FontAwesomeIcon icon={faUserTie} className='fourth-section-icon' />
                                </div>
                                <h5>PROFESSIONAL STAFF</h5>
                                <h6>We have the best team in the world to provide service to our clients in a professional manner.</h6>
                            </div>
                            <div className="col-lg-6">
                                <div className='icon-background d-flex justify-content-center align-items-center mb-2'>
                                    <FontAwesomeIcon icon={faCarSide} className='fourth-section-icon' />
                                </div>
                                <h5>DISTRIBUTION & DELIVERY</h5>
                                <h6>We have the best delivery & distribution system for our clients.</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className='icon-background d-flex justify-content-center align-items-center mb-2'>
                                    <FontAwesomeIcon icon={faShieldHeart} className='fourth-section-icon' />
                                </div>
                                <h5>EFFECTIVE USE</h5>
                                <h6>We make sure the best use of our warehouse space to reduce the extra cost.</h6>
                            </div>
                            <div className="col-lg-6">
                                <div className='icon-background d-flex justify-content-center align-items-center mb-2'>
                                    <FontAwesomeIcon icon={faEarthAsia} className='fourth-section-icon' />
                                </div>
                                <h5>CONTINOUS FOCUS</h5>
                                <h6>Providing the best service is our only focus.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={Benefits} alt="" srcset="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;