import React from 'react';
import './Header.css';
import NavMenu from './NavMenu/NavMenu';

const Header = () => {

    return (
        <div className='header-container'>
            <div className="container">
                <NavMenu></NavMenu>
            </div>
        </div >
    );
};

export default Header;