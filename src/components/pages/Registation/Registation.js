import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Registation.css';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import useFirebase from '../../../hooks/useFirebase';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Registation = () => {
    const signInIcon = <FontAwesomeIcon icon={faSignInAlt} />
    const googleIcon = <FontAwesomeIcon icon={faGoogle} />
    const { signInUsingGoogle, setError, setUserName, registerNewUser, handleNameChange, handleEmailChange, handlePasswordChange } = useFirebase();
    const History = useHistory();
    const Location = useLocation();
    const Redirect = Location?.state?.from || "/";

    const handleRegister = (e) => {
        e.preventDefault();
        registerNewUser()
            .then(result => {
                setUserName();
                History.push(Redirect);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleGoogleregistration = () => {
        signInUsingGoogle();
        History.push(Redirect);
    }


    return (
        <div>
            {/* Registation section starts  */}

             <Container>
                <div className="col-md-4"></div>
                <div className="col-md-4 mx-auto my-5">
                <Form className="registration" onSubmit={handleRegister}>
                        <Form.Text className="text-center">
                            <h1 className="py-3">Registration</h1>
                        </Form.Text>
                
                    <Form.Group as={Col} controlId="formGridName" className="mb-3">
                    <Form.Control onBlur={handleNameChange} type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                


                <Button variant="primary" type="submit" className="w-100">
                    Sign Up
                </Button>
                <div className="link mt-3">
                                <Button variant="outline-info" onClick={handleGoogleregistration}>
                            {googleIcon}</Button>
                        </div>
                        <div className="link mt-3">
                                <Link to="/login"><Button variant="outline-info" type="submit" className="w-100">
                                Already Have An Account? Login Here {signInIcon}</Button></Link>
                        </div>
            </Form>
                </div>
                <div className="col-md-4"></div>
            </Container>

            {/* Registation section ends  */}
        </div>
    );
};

export default Registation;