import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import GoogleLogo from '../../../images/front-end-img/social-logo/google.png';
import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Button, Container, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Spinner from '../../Spinner/Spinner';

const SignUp = () => {
    const [agree, setAgree] = useState(false)
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);

    const navigate = useNavigate();
    let displayError;
    if (error || error1) {
        displayError = (
            <p className='text-danger'>{" "} Error: {error?.message} {error1?.message}</p>
        );
        console.log('outside: ', displayError)
    }
    if (loading || sending) {
        <Spinner></Spinner>
    }
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.reTypePassword.value;
        event.target.reset();

        if (password === confirmPassword) {
            if (displayError) {
                console.log('inside: ', displayError)
            }
            else {
                toast("Congratulation! Registration Successful! Please Check Email and Verify User")
                await createUserWithEmailAndPassword(email, password);
                await sendEmailVerification()
                // navigate('/');
            }
        }
        else {
            toast("Password Didn't Matched!!!")
        }
    }



    return (
        <div className='signup-container py-5'>
            {/* <div className="signup-card mb-3">
                <div className='text-center py-4'>
                    <h3>Get Started With Us</h3>
                    <p>Register a New Membership</p>
                </div>
                <div className="input-fields">
                    <div className="name-field">
                        <FontAwesomeIcon icon={faUserLarge} className='user-name' />
                        <input type="name" name="name" placeholder='Full Name' required />
                    </div>
                    <div className="email-field">
                        <FontAwesomeIcon icon={faEnvelope} className='user-email' />
                        <input type="email" name="email" placeholder='Email Address' required />
                    </div>
                    <div className="password-field">
                        <FontAwesomeIcon icon={faLock} className='pass' />
                        <input type="password" name="password" placeholder='Password  ' required />
                    </div>
                    <div className="password-field">
                        <FontAwesomeIcon icon={faLock} className='pass' />
                        <input type="password" name="re-typePassword" placeholder='ReType Password  ' required />
                    </div>
                    <div className="checkboxes">
                        <div>
                            <input type="checkbox" name="terms" className='me-2' onClick={() => setAgree(!agree)} />
                            I agree to the terms
                        </div>

                    </div>
                    <button type='submit' className='btn btn-sign-in' disabled={!agree}>SIGN Up</button>
                    <div className='d-flex justify-content-center mt-3'>
                        <p>Already have an account? <span className='register-text' onClick={() => navigate('/login')}>Please Login</span></p>
                    </div>
                </div>
            </div> */}

            <Container>
                <div className="col-md-4 col-lg-4 col-10 mx-auto">
                    <h2 className="text-center mb-3">Please Sign Up</h2>
                    <div className=" mx-auto">
                        {/* display error */}
                        {displayError}
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control
                                    type="name"
                                    name="name"
                                    placeholder="Enter name"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicReTypePassword">
                                <Form.Label>Re Type Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="reTypePassword"
                                    placeholder="Re Type Password"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check
                                    className={agree ? "text-primary" : "text-danger"}
                                    onClick={() => setAgree(!agree)}
                                    type="checkbox"
                                    name="terms"
                                    label="Accept terms and condition"
                                />
                            </Form.Group>
                            <Button
                                className="w-50 d-block mx-auto"
                                disabled={!agree}
                                variant="primary"
                                type="submit"
                            >
                                Sign Up
                            </Button>
                            <p className="mt-3">
                                Already have a account?
                                <span className="ms-2">
                                    <Link className="text-decoration-none" to="/login">
                                        Log In
                                    </Link>
                                </span>
                            </p>
                        </Form>
                        {/* after & before line */}
                        <div className="d-flex align-items-center my-4">
                            <div
                                style={{ width: "48%", height: "2px" }}
                                className="bg-primary "
                            ></div>
                            <div className="mx-2 pb-1">Or</div>
                            <div
                                style={{ width: "48%", height: "2px" }}
                                className="bg-primary"
                            ></div>
                        </div>
                        {/* login with others */}
                        {/* <SocialLogin></SocialLogin>*/}
                    </div>
                </div>
            </Container>

            {/* <div className='social-login-section'>
                <p>- Register With -</p>
                <button type="submit" className='google' disabled={!agree}>
                    <img src={GoogleLogo} alt="" srcset="" style={{ width: '30px' }} /> <span>Google Sign Up</span>
                </button>

            </div> */}
        </div >
    );
};

export default SignUp;