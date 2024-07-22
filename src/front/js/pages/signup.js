import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css";
import GeekPet from "../../img/GeekPet.png";
import Fact85 from "../../img/85Fact.png"



export const Signup = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const validateEmail = () => {
        if (!email) {
            setEmailError("Email is required");
            return false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Invalid email address");
            return false;
        }
        setEmailError(null);
        return true;
    };

    const validatePassword = () => {
        if (!password) {
            setPasswordError("Password is required");
            return false;
        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
            return false;
        } else if (password.length > 20) {
            setPasswordError("Password must be less than 20 characters long");
            return false;
        }
        setPasswordError(null);
        return true;
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(null);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError(null);
    };

    let navigate = useNavigate();
    function handleLoginClick() {
        navigate('/login');
    }

    const handleSignupClick = () => {
        if (validateEmail() && validatePassword()) {
            actions.signup(email, password);
        }
    };

    useEffect(() => {
        if (store.isSignUpSuccessful) {
            navigate("/login");
        }
    }, [store.isSignUpSuccessful]);

    return (
            <div className="fulldisplay">


                <div className="fullSignupform container d-flex justify-content-center align-items-center">
                    <div className="welcome vstack pe-3">
                        <div className="welcometext">
                        <img src={Fact85} className="fact85" alt="Dog Owner Fact" />
                        </div>
                </div>


                <div className="signupDiv w-75 w-md-40 w-lg-20 mx-5">
                                <div className="pup-div container d-flex justify-content-center">
                                    <img src={GeekPet} className="logo-img img-fluid" style={{ maxHeight: 110 }} alt="Smart Pup" />
                                </div>
                                <h1 className="signUpTitle container d-flex justify-content-center">Create Your Account</h1>
                                <div>
                                    {store.signupMessage || ""}
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center vstack mt-2">
                                    <div className="w-75">
                                        <h1 className="email fw-normal text-start">Email:</h1>
                                        <input
                                            type="email"
                                            className="form-control form-control-lg w-100 rounded-0"
                                            placeholder="email@example.com"
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                        {emailError && <div className="text-danger">{emailError}</div>}
                                    </div>

                                    <div className="w-75 mt-2">
                                        <h1 className="password fw-normal text-start">Password:</h1>
                                        <input
                                            type="password"
                                            className="form-control form-control-lg w-100 rounded-0"
                                            placeholder="Must have at least 6 characters"
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                        {passwordError && <div className="text-danger">{passwordError}</div>}
                                    </div>

                                </div>
                                <div className="signupFullDiv mt-3">
                                    <div className="container d-flex justify-content-center align-items-center">
                                        <button onClick={handleSignupClick} type="button" className="signup-btn selected btn btn-light btn-md w-25">Create Account</button>
                                    </div>
                                    <div className="container d-flex justify-content-center align-items-center mt-1">
                                        <p className="fw-lighter">Already have an Account?
                                            <button type="button" className="logInBtn btn btn-link" onClick={handleLoginClick}>Log in</button>
                                        </p>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
    );
};
