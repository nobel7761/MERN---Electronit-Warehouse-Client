import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './SocialMediaLogin.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../../../Loading/Loading';
import Loading from '../../../Loading/Loading';

const SocialMediaLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let displayError;
    if (error) {
        displayError = (
            <p className='text-danger'>
                {" "}
                Error: {error?.message}
            </p>
        )
    }

    if (loading) {
        <Loading></Loading>
    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user])


    const googleSignIn = async () => {

        await signInWithGoogle()
    }
    return (
        <div className='container d-flex justify-content-center'>
            {displayError}
            <Button variant="outline-dark" size="lg" className='w-25' onClick={googleSignIn}><FontAwesomeIcon icon={faGoogle} className='me-4' />Google Login</Button>
        </div>
    );
};

export default SocialMediaLogin;