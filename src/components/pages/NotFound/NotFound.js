import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignUpBanner from '../../Auth/SignUp/SignUpBanner/SignUpBanner';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='login-container py-5 error-page-container h-full'>
            <SignUpBanner></SignUpBanner>
            <h1>Oops!</h1>
            <div className='d-flex flex-column align-items-center'>
                <h2>404 - PAGE NOT FOUND</h2>
                <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                <Link to='/'>
                    <Button className='mt-3 btn btn-primary' size='lg'>GO HOME PAGE</Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;