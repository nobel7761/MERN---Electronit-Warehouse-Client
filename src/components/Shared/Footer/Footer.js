import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <div className='footer py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-12">
                        <h4 className="footer-title">About</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation ullamco laboris</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                    </div>
                    <div className="col-lg-2 col-12">
                        <h4 className="footer-title">Quick Link</h4>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faArrowRightLong} className='me-2' />
                                <Link to='/home'>Home</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faArrowRightLong} className='me-2' />
                                <Link to='/blogs'>Blogs</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faArrowRightLong} className='me-2' />
                                <Link to='/signup'>Register/Login</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faArrowRightLong} className='me-2' />
                                <Link to='/signup'>Manage Inventories</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faArrowRightLong} className='me-2' />
                                <Link to='/signup'>Add Items</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faArrowRightLong} className='me-2' />
                                <Link to='/signup'>My Items</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-12">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                                123, Lorem Ipsum, Dummy City, FL-12345 USA
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} className='me-2' />
                                +8801-5213-20912 | +8801-6116-27761
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} className='me-2' />
                                habiburnobel@gmail.com | habibur15-7761@diu.edu.bd
                            </li>
                        </ul>
                        <div className='icons'>
                            <div className='brand-icon-facebook'>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </div>
                            <div className='brand-icon-twitter'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                            <div className='brand-icon-linkedin'>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </div>
                            <div className='brand-icon-youtube'>
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <h4 className='footer-title'>Subscribe</h4>
                        <p>Sign Up to our Newsletter and get the latest offers.</p>
                        <div className='subscribe'>
                            <form onSubmit={handleSubmit}>
                                <input type="email" name="email" placeholder='Your Email Address' autoComplete='off' required />
                                <button type="submit" value="Submit" className="btn btn-primary mt-5">Get Notified</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;