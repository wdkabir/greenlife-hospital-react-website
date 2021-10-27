import React from 'react';
import './Login.css';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import { Button, Container, Form } from 'react-bootstrap';

const Login = () => {
    const googleIcon = <FontAwesomeIcon icon={faGoogle} />
    const signInIcon = <FontAwesomeIcon icon={faSignInAlt} />
    const { signInUsingGoogle, processLogin, handleEmailChange, handlePasswordChange } = useFirebase();
    const History = useHistory();
    const Location = useLocation();
    const Redirect = Location?.state?.from || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        processLogin();
        History.push(Redirect);
    }
    const handleGoogleLogin = () => {
        signInUsingGoogle();
        History.push(Redirect);
    }

    return (
        <div>
            <Container>
                <div className="col-md-4"></div>
                <div className="col-md-4 mx-auto my-5">
                <Form className="login" onSubmit={handleLogin}>
                        <Form.Text className="text-center">
                            <h1 className="py-3">Login Here</h1>
                        </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" className="w-100">
                        Login {signInIcon}
                    </Button>
                        <div className="link mt-3">
                                <Button variant="outline-info" onClick={handleGoogleLogin}>
                            {googleIcon}</Button>
                        </div>
                        <div className="link mt-3">
                                <Link to="/registration"><Button variant="outline-info" type="submit" className="w-100">
                                Not a member? Sign up Here</Button></Link>
                        </div>
                    </Form>
                </div>
                <div className="col-md-4"></div>
            
            </Container>

            {/* Login section ends  */}

        </div>
    );
};

export default Login;