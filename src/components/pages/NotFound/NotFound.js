import React from 'react';
import { Container } from 'react-bootstrap';
// Image
import notFound from '../.././../images/notfound.jpg';
// CSS
import './NotFound.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Container fluid>
                <img
                    src={notFound}
                    width="100%"
                    className="d-inline-block align-top"
                    alt="learn-point-logo"
                />
                <div className="my-5">
                <Link to="/">
                    <Button variant="info">BACK TO HOME</Button>
                </Link>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;