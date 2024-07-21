import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../../styles/login.css";

export const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUpClick = () => {
        navigate('/signup');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const isAuthenticated = await authenticateUser(email, password);

            if (isAuthenticated) {
                navigate('/private');
                window.location.reload();
            } else {

            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    const authenticateUser = async (email, password) => {
        try {
            const response = await fetch(process.env.BACKEND_URL + "api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                sessionStorage.setItem('token', data.token);
                return true;
            } else if (response.status === 404) {
                setError('The login endpoint was not found. Please check the server-side configuration.');
            } else if (response.status === 401) {
                setError('Invalid email or password.');
            } else {
                const data = await response.json();
                setError(`An error occurred: ${data.message}`);
            }
            return false;
        } catch (error) {
            setError('An error occurred while trying to authenticate. Please try again later.');
            return false;
        }
    };

    return (
        <div className="fulldisplay">


            <div className="fullloginform container d-flex justify-content-center align-items-center">
                <div className="welcome vstack ">
                    <div className="welcometext">
                    <h1 >WELCOME.</h1>
                    <p>
                    Welcome to Petpal! We're your one-stop resource for pet care information, tips, and advice. From basic care to expert insights, we've got you covered. Can't find what you need? Just email us. Join our community, learn, and give your pets the best life possible. Start exploring Petpal today!
                    </p>
                    </div>
                </div>

                <div className="loginDiv w-100 w-md-40 w-lg-20 mx-5">
                    <h1 className=" loginTitle container d-flex justify-content-center mt-4">Login</h1>

                    <div className="d-flex flex-column justify-content-center align-items-center vstack mt-2">
                        <div className="w-75">
                            <h1 className="fw-normal text-start"></h1>
                            <input
                                type="email"
                                placeholder="Email"
                                className="form-control form-control-lg w-100 rounded-0"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="w-75 mt-2">
                            <h1 className="fw-normal text-start"></h1>
                            <input
                                type="password"
                                placeholder="Password"
                                className="form-control form-control-lg w-100 rounded-0"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="container d-flex justify-content-center align-items-center">
                            {error && <h6 className="text-danger fw-normal">{error}</h6>}
                        </div>
                        <div className="container d-flex justify-content-center align-items-center">
                            <button type="button" className="btn btn-light btn-md w-25 btn-outline-dark mt-2" onClick={handleSubmit}>LOGIN</button>
                        </div>

                        <div className="container d-flex justify-content-center align-items-centermb-4">
                            <p className="fw-lighter">Don't have an Account?
                                <button type="button" className="btn btn-link" onClick={handleSignUpClick}>Sign up Here</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
