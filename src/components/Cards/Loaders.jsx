import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loaders = () => {
    return (
        <Spinner animation="border" role="status" size='lg' variant='primary' style={{ width: "100px", height: "100px"}}>
            <span className="visually-hidden m-auto">Loading...</span>
        </Spinner>
    );
}

export default Loaders;
