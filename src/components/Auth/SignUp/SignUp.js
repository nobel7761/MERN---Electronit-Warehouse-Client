import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Button, Container, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import SignUpBanner from './SignUpBanner/SignUpBanner';
import Loading from '../../Loading/Loading';
import SocialMediaLogin from '../Login/SocialMediaLogin/SocialMediaLogin';
import useToken from '../../../Hooks/useToken';

const SignUp = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();


    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, VerificationError] = useSendEmailVerification(auth);
    const [token] = useToken(user)




    let displayError;
    if (error || VerificationError) {
        displayError = (
            <p className='text-danger'>{" "} Error: {error?.message} {VerificationError?.message}</p>
        );

    }
    if (loading || sending) {
        <Loading></Loading>
    }

    if (token) {
        navigate('/home')
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        event.target.reset();

        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();


    }




    return (
        <div className='signup-container py-5'>
            <SignUpBanner></SignUpBanner>
            <Container>
                <div className="col-md-4 col-lg-4 col-10 mx-auto">
                    <h2 className="text-center mb-3">Please Sign Up</h2>
                    <div className=" mx-auto">
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