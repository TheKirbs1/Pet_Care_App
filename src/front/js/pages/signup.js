import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css";


export const Signup = () => {
    const { store,actions } = useContext(Context);
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");

    let navigate = useNavigate();
    function handleLoginClick() {
        navigate('/login');
    }
    const handleClick = () => {
		actions.signup(email, password)
	}

    useEffect (() => {
        if(store.isSignUpSuccessful) {
            navigate("/login")
        }
    }, [store.isSignUpSuccessful])
    return (
        
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="border border-2 p-3 w-75 w-md-40 w-lg-20 mt-5">
                    <h1 className="container d-flex justify-content-center">Sign Up</h1>
                    <div>
                        {store.signupMessage || ""}
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center vstack mt-5">
                        <div className="w-75">
                            {/* must be valid email */}
                            <h1 className="fw-normal text-start">Email:</h1>
                            <input
                                type="email"
                                className="form-control form-control-lg w-100 rounded-0"
                                placeholder="email@example.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        {/* <div className="container d-flex justify-content-center align-items-center">
                            <h6 className="text-danger fw-normal">Please enter a valid email</h6>
                        </div> */}
                        <div className="w-75">
                            {/* must have 6 characters */}
                            <h1 className="fw-normal text-start">Password:</h1>
                            <input
                                type="password"
                                className="form-control form-control-lg w-100 rounded-0"
                                placeholder="Must have at least 6 characters"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        {/* <div className="container d-flex justify-content-center align-items-center">
                            <h6 className="text-danger fw-normal">Password must contain 6 characters</h6>
                        </div> */}
                        <div className="container d-flex justify-content-center align-items-center">
                            <button onClick={handleClick} type="button" className="btn btn-light btn-md w-25 btn-outline-dark">SIGN UP</button>
                        </div>
                        <div className="container d-flex justify-content-center align-items-center">
                            <p className="fw-lighter">Already have an Account?

                                <button type="button" className="btn btn-link" onClick={handleLoginClick}>Log in</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

