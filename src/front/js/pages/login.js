import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';


export const Login = () => {
    const navigate = useNavigate();

    function handleSignUpClick() {
        navigate('/');
    }

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="border border-2 p-3 w-75 w-md-40 w-lg-20 mt-5">

                    <h1 className="container d-flex justify-content-center">Sign In</h1>


                    <div className="d-flex flex-column justify-content-center align-items-center vstack mt-5">
                        <div className="w-75">
                            <h1 className="fw-normal text-start">Email:</h1>
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="form-control form-control-lg w-100 rounded-0"
                            />
                        </div>
                        <div className="w-75">
                            <h1 className="fw-normal text-start">Password:</h1>
                            <input
                                type="password"
                                placeholder="Must have at least 6 characters"
                                className="form-control form-control-lg w-100 rounded-0"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="container d-flex justify-content-center align-items-center">
                            {/* need to input function that calls errors from email and password */}
                            <h6 className="text-danger fw-normal">"Email not found in our records. Please try again or Sign Up"</h6>
                        </div>
                        <div className="container d-flex justify-content-center align-items-center">
                            <button type="button" className="btn btn-light btn-md w-25 btn-outline-dark">LOGIN</button>
                        </div>

                        <div className="container d-flex justify-content-center align-items-center">
                            <p className="fw-lighter">Don't have an Account?

                                <button type="button" className="btn btn-link" onClick={handleSignUpClick}>Sign up Here</button>
                                {/* Make sure this is the right page navigated through */}
                            </p>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}