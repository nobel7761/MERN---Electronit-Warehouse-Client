import React from 'react';
import { Container } from 'react-bootstrap';

const Spinner = () => {
    return (
        <Container>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    );
};

export default Spinner;