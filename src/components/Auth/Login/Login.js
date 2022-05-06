import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import GoogleLogo from '../../../images/front-end-img/social-logo/google.png';
import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className='login-container py-5'>
            <h1 className='text-center'>Login Page</h1>
            <div className="login-card mb-3">
                <div className='text-center py-4'>
                    <h3>Let's Get Started</h3>
                    <p>Login to continue to electronics Warehouse.</p>
                </div>
                <div className="input-fields">
                    <div className="email-field">
                        <FontAwesomeIcon icon={faEnvelope} className='user' />
                        <input type="email" name="email" required placeholder='Email Address' />
                    </div>
                    <div className="password-field">
                        <FontAwesomeIcon icon={faLock} className='pass' />
                        <input type="password" name="password" required placeholder='Password  ' />
                    </div>
                    <div className="checkboxes">
                        <div>
                            <input type="checkbox" name="Remember Me" className='me-2' />
                            Remember Me
                        </div>
                        <div>
                            <p>Forget Password?</p>
                        </div>
                    </div>
                    <button className='btn btn-sign-in'>SIGN IN</button>
                    <div className='d-flex justify-content-center mt-3'>
                        <p>Don't have an account? <span className='register-text' onClick={() => navigate('/signup')}>Please Register</span></p>
                    </div>
                </div>
            </div>

            <div className='social-login-section'>
                <p>- Login With -</p>
                <button type="submit" className='google'>
                    <img src={GoogleLogo} alt="" srcset="" style={{ width: '30px' }} /> <span>Google Login</span>
                </button>

            </div>
        </div >
    );
};

export default Login;