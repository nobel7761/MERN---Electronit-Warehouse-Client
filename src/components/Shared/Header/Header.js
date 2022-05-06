import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Nav, Navbar } from 'react-bootstrap';
import Logo from '../../../images/logo-light-text2.png';
import CustomLink from './CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="container">
                <div className="header-top">
                    <Link to='/home'>
                        <FontAwesomeIcon icon={faCircleQuestion} style={{ marginRight: '5px', fontSize: '15px' }} />
                        Ask a Question
                    </Link>
                    <div className="header-top-right">
                        <Link to='/home' style={{ marginRight: '30px' }}>
                            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px', fontSize: '15px' }} />
                            info@electronics.warehouse.com
                        </Link>
                        <Link to='/home'>
                            <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px', fontSize: '15px' }} />
                            +8801521320912
                        </Link>
                    </div>
                </div>


                <Navbar bg="transparent" expand="lg" className='navbar-sticky'>

                    <Navbar.Brand as={Link} to="/home">
                        <img src={Logo} alt="" srcset="" className='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ms-auto ">
                            <CustomLink to="/home" className='nav-link header-title'>Home</CustomLink>
                            <CustomLink to="/blogs" className='nav-link header-title'>Blogs</CustomLink>
                            <CustomLink to="/signup" className='nav-link header-title'>Register</CustomLink>
                            <CustomLink to="/login" className='nav-link header-title'>Login</CustomLink>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>

                <div className='d-flex flex-column justify-content-center align-items-center text-center home-content '>
                    <h1>Welcome to Electronics Warehouse</h1>
                    <p>Store Your Electronics Accessories Here</p>
                    <button className='btn btn-primary w-25'>Learn More</button>
                </div>
            </div>
        </div >
    );
};

export default Header;