import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './SocialMediaLogin.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../Loading/Loading';
import useToken from '../../../../Hooks/useToken';

const SocialMediaLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(user)

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

        if (token) {
            navigate(from, { replace: true })
        }

    }, [token])


    const googleSignIn = async () => {

        await signInWithGoogle()
    }
    return (
        <div className='container d-flex justify-content-center'>
            {displayError}
            <Button variant="outline-dark" size="lg" className='w-25 social-media-btn' onClick={googleSignIn}><FontAwesomeIcon icon={faGoogle} className='me-4' />Google Login</Button>
        </div>
    );
};

export default SocialMediaLogin;