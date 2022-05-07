import React from 'react';
import SignUpBanner from '../../Auth/SignUp/SignUpBanner/SignUpBanner';
import './MyItems.css';

const MyItems = () => {
    return (
        <div className='login-container py-5'>
            <SignUpBanner></SignUpBanner>
            <div className="container">
                <h1>My Items</h1>
            </div>
        </div>
    );
};

export default MyItems;