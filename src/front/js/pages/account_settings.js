import React, { useContext, useState, useEffect } from "react";
import simpleLogo from "../../img/simpleLogo.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"

import "../../styles/account_settings.css";

export const Account_settings = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch(process.env.BACKEND_URL + "api/private", {
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token")
            }
        })
            .then(resp => resp.json())
            .then(data => {
                setEmail(data.user.email || "")
                setPassword(data.user.password || "") // Ensure it's always a string
                setDogs(data.user.dogs || [])
            }).catch(error => console.log(error))
    }, []);

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

    const handleEditUserSettings = async () => {
        if (validateEmail() && validatePassword()) {
            const { msg, error } = await actions.editUserSettings(email, password);
            if (error) {
                console.error(error);
            } else {
                console.log(msg);
            }
        }
    };

    const handleDeactivation = async () => {
        if (validateEmail() && validatePassword()) {
            const { msg, error } = await actions.deactivateAccount(email, password);
            if (error) {
                console.error(error);
            } else {
                console.log(msg);
            }
        }
    };

    const handleReactivation = async () => {
        if (validateEmail() && validatePassword()) {
            const { msg, error } = await actions.reactivateAccount(email, password);
            if (error) {
                console.error(error);
            } else {
                console.log(msg);
            }
        }
    };

    return (
        <>
            <div className="border border-1 mx-5 my-5">
                <div className="d-flex justify-content-center align-items-center vstack my-5 mx-5 ">
                    <div><h1>ACCOUNT SETTINGS</h1></div>

                    <div>
                        <img src={simpleLogo} className="img-fluid" alt="Simple Logo" />
                    </div>
                    <div className="w-full max-w-md">
                        <div className="mb-1 vstack">
                            <label className="block mb-2 ">Edit Email:</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailError && <div className="text-danger">{emailError}</div>}
                        </div>
                        <div className="mb-1 vstack">
                            <label className="block mb-2 font-bold">Edit Password:</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {passwordError && <div className="text-danger">{passwordError}</div>}
                        </div>
                    </div>
                    <div className="d-flex justify-content-start align-content-start pt-2 mb-2">
                        <button type="button" className="btn btn-primary text-dark"
                            style={{ backgroundColor: 'orange', borderColor: 'orange' }} onClick={handleEditUserSettings}>
                            Save
                        </button>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center vstack">
                    <h3>MY PETS</h3>
                    <b>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i></b>
                    {dogs?.map((dog, index) => (
                        <Link key={dog.id} to={"/private/edit_pet/" + dog.id} className="d-flex">
                            <h6><button type="button" className="btn btn-link">{dog.name}</button></h6>
                        </Link>
                    ))}
                    <b>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i>-<i className="fa-solid fa-dog"></i></b>
                </div>

                <div className="d-flex justify-content-center mt-3 ">
                    <b className="text-danger me-4">{store.isAccountActive ? "Deactivate Account" : "Reactivate Account"}</b>
                    <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        {store.isAccountActive ? "Deactivate" : "Reactivate"}
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">{store.isAccountActive ? "Account Deactivation" : "Account Reactivation"}</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {store.isAccountActive
                                        ? "Are you sure you want to deactivate your account?"
                                        : "Are you sure you want to reactivate your account?"}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={store.isAccountActive ? handleDeactivation : handleReactivation}
                                    >
                                        {store.isAccountActive ? "Deactivate" : "Reactivate"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

