import React, { useEffect, useRef, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SignUpBanner from '../SignUp/SignUpBanner/SignUpBanner';
import { Button, Container, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import SocialMediaLogin from './SocialMediaLogin/SocialMediaLogin';
import Loading from '../../Loading/Loading';
import axios from 'axios';
import useToken from '../../../Hooks/useToken';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [agree, setAgree] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";


    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user);


    if (token) {
        navigate(from, { replace: true });
    }


    if (loading || sending) {
        <Loading></Loading>
    }

    let displayError;
    if (error || resetError) {
        displayError = (
            <p className="text-danger">
                {" "}
                Error: {error?.message} {resetError?.message}
            </p>
        );
    }




    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // event.reset.value()

        await signInWithEmailAndPassword(email, password);




    };

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user]);

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Send email");
        } else {
            toast("Please enter your email address");
        }
    };

    return (
        <div className="login-container py-5">
            <SignUpBanner></SignUpBanner>
            <Container>
                <h2 className="text-center mb-3 ">Please Log In</h2>
                <div className="col-md-4 col-lg-4 col-10 mx-auto">
                    {displayError}
                    <Form onSubmit={handleSubmit} className="">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                ref={emailRef}
                                type="email"
                                name="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                ref={passwordRef}
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                onClick={() => setAgree(!agree)}
                                className={agree ? "text-primary" : "text-danger"}
                                type="checkbox"
                                label="Accept the terms and condition"
                            />
                        </Form.Group>

                        <Button
                            disabled={!agree}
                            className="w-50 mx-auto d-block"
                            variant="primary"
                            type="submit"
                        >
                            Log In
                        </Button>

                        <p className="mt-3">
                            {" "}
                            Create a new account!
                            <span className="ms-2">
                                <Link className="text-decoration-none" to="/signup">
                                    Sign Up
                                </Link>
                            </span>
                        </p>
                        <p>
                            Forget Password?{" "}
                            <Button onClick={resetPassword} variant="link">
                                Reset Password
                            </Button>
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
            </Container>
            <SocialMediaLogin></SocialMediaLogin>
        </div>
    );
};

export default Login;


/* {
    SignInLoading && <div className='d-flex justify-content-center align-items-center w-100 registrationLoading'>
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner></div>
} */