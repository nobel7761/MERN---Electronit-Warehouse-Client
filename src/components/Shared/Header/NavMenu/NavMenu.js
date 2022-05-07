import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import Logo from '../../../../images/logo-light-text2.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { signOut } from "firebase/auth";
import './NavMenu.css';

const NavMenu = () => {

    const [user] = useAuthState(auth);
    return (
        <div>
            <div className="header-top">
                <Link to='/home'>
                    <FontAwesomeIcon icon={faCircleQuestion} style={{ marginRight: '5px', fontSize: '15px', color: 'white' }} />
                    Ask a Question
                </Link>
                <div className="header-top-right">
                    <Link to='/home' style={{ marginRight: '30px' }}>
                        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px', fontSize: '15px', color: 'white' }} />
                        info@electronics.warehouse.com
                    </Link>
                    <Link to='/home'>
                        <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px', fontSize: '15px', color: 'white' }} />
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
                        <CustomLink to="/manage-inventories" className='nav-link header-title'>Manage Inventories</CustomLink>
                        {
                            user?.displayName || user?.email ? (
                                <>

                                    <CustomLink to="/add-items" className='nav-link header-title'>Add Items</CustomLink>
                                    <CustomLink to="/my-items" className='nav-link header-title'>My Items</CustomLink>
                                    <button className='logout-btn' onClick={() => signOut(auth)}>Logout</button>
                                </>
                            )
                                :
                                (
                                    <>
                                        <CustomLink to="/signup" className='nav-link header-title'>Register</CustomLink>
                                        <CustomLink to="/login" className='nav-link header-title'>Login</CustomLink>
                                    </>
                                )}

                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );

}

export default NavMenu;