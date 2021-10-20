import React from 'react';
import './Login.css';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle, processLogin, handleEmailChange, handlePasswordChange } = useFirebase();
    const History = useHistory();
    const Location = useLocation();
    const Redirect = Location?.state?.from || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        processLogin();
        History.push(Redirect);
    }

    const Google = <FontAwesomeIcon icon={faGoogle} />

    return (
        <div>
            {/* Login section starts  */}

            <section className="login" id="login">

                <h1 className="heading"> <span>Log</span> In </h1>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={handleLogin}>
                            <input onBlur={handleEmailChange} type="email" placeholder="Enter your email" className="box" required />
                            <input onBlur={handlePasswordChange} type="password" placeholder="Enter your password" className="box" required />
                            <input type="submit" value="LogIn" className="btn" />
                            <div className="link">
                                <Link to="/registation">Not a member? Click for Sign up</Link>
                                <div className="share">
                                    <a href="#0" onClick={signInUsingGoogle}>{Google}</a>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </section>

            {/* Login section ends  */}

        </div>
    );
};

export default Login;