import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import GoogleLogo from '../../../images/front-end-img/social-logo/google.png';
import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Button, Container, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Spinner from '../../Loading/Loading';
import SignUpBanner from './SignUpBanner/SignUpBanner';
import Loading from '../../Loading/Loading';
import SocialMediaLogin from '../Login/SocialMediaLogin/SocialMediaLogin';

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
        <Loading></Loading>
    }
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.reTypePassword.value;
        event.target.reset();

        if (password === confirmPassword && password.length >= 6) {
            await createUserWithEmailAndPassword(email, password);
            await sendEmailVerification()
            toast("Congratulation! Registration Successful! Please Check Email and Verify User")
            navigate('/');
        }
        else if (password === confirmPassword && password.length < 6) {
            toast("Password length should be minimum 6 characters!")
        }
        else {
            toast("Password Didn't Matched!!!")
        }
    }



    return (
        <div className='signup-container py-5'>
            <SignUpBanner></SignUpBanner>
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

                    </div>
                </div>
            </Container>
            <SocialMediaLogin></SocialMediaLogin>
        </div >
    );
};

export default SignUp;