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


            <div className="container d-flex justify-content-center align-items-center">
                <div className="welcome vstack justify-content-middle">
                    <div className="welcometext">
                    <h1 >WELCOME.</h1>
                    <p>
                        Hello welcome to Petpal, where you will find some of you Pets facts and info and if you dont, fell free to email us.
                    </p>
                    </div>
                </div>

                <div className="loginDiv  p-3 w-75 w-md-40 w-lg-20 ">
                    <h1 className=" signupTitle container d-flex justify-content-center">Signup</h1>

                    <div className="d-flex flex-column justify-content-center align-items-center vstack mt-5">
                        <div className="w-75">
                            <h1 className="fw-normal text-start">Email:</h1>
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="form-control form-control-lg w-100 rounded-0"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="w-75">
                            <h1 className="fw-normal text-start">Password:</h1>
                            <input
                                type="password"
                                placeholder="Must have at least 6 characters"
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
                            <button type="button" className="btn btn-light btn-md w-25 btn-outline-dark" onClick={handleSubmit}>LOGIN</button>
                        </div>

                        <div className="container d-flex justify-content-center align-items-center">
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
