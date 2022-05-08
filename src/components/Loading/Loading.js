import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <Container>
            <div className='d-flex justify-content-center'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        </Container>
    );
};

export default Loading;