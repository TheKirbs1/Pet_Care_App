import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css";
import GeekPet from "../../img/GeekPet.png";
import slide1 from "../../img/slide1.png";
import slide2 from "../../img/slide2.png";
import slide3 from "../../img/slide3.png";


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
        <div className="everythingDiv container-fluid">
            <div className="bothCards row">
            <div className="col-md-1"></div>
                {/* Column for carousel */}
                                
                    <div className="col-md-5 carouselContainer d-flex">
                    <div id="signupCarousel" className="carousel slide d-flex" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={slide1} className="d-block w-100" alt="Slide 1" />
                            </div>
                            <div className="carousel-item">
                                <img src={slide2} className="d-block w-100" alt="Slide 2" />
                            </div>
                            <div className="carousel-item">
                                <img src={slide3} className="d-block w-100" alt="Slide 3" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Column for signup form */}
                <div className="col-md-5 fullSignupContainer">
                    <form className="signupForm">
                        <div className="signupFullDiv container d-flex">
                            <div className="signupFormContainer p-3 w-100">
                                <div className="pup-div container d-flex justify-content-center">
                                    <img src={GeekPet} className="logo-img img-fluid" style={{ maxHeight: 110 }} alt="Smart Pup" />
                                </div>
                                <h1 className="signUpTitle container d-flex justify-content-center">Create Your Account</h1>
                                <div>
                                    {store.signupMessage || ""}
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center vstack mt-5">
                                    <div className="w-75">
                                        <h2 className="email fw-normal text-start">Email:</h2>
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
                                        <h2 className="password fw-normal text-start">Password:</h2>
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
                    </form>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    );
};
