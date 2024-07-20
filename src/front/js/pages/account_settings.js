import React, { useContext, useState, useEffect } from "react";
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
        <div className="fullDiv">
            <div><h1 className="acountSettingsTitle d-flex justify-content-center align-content-center text-decoration-underline" >ACCOUNT SETTINGS</h1></div>
            <div className="d-flex justify-content-center align-content-center box mx-5 my-5 pb-2 vstack rounded-2" >
                <div className="userSettingsDiv vstack mt-5 mx-5 border">

                    <p className="d-flex justify-content-center align-items-center">USER SETTINGS</p>


                    <div className="w-full max-w-md ">

                        <div className="mb-1 vstack px-2">
                            <label className="block mb-2">Edit Email:</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ width: '100px', minWidth: '1000px' }}
                            />
                            {emailError && <div className="text-danger">{emailError}</div>}
                        </div>
                        <div className="mb-1 vstack px-2">
                            <label className="block mb-2 font-bold">Edit Password:</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ width: '100px', minWidth: '1000px' }}
                            />
                            {passwordError && <div className="text-danger">{passwordError}</div>}
                        </div>
                    </div>
                    <div className="d-flex justify-content-end align-content-center pt-1 mb-2 mx-3">
                        <button type="button" className="save-btn btn-primary text-dark"
                            style={{ width: '100px', minWidth: '100px' }}
                            onClick={handleEditUserSettings}>
                            Save
                        </button>
                    </div>
                </div>

                <div className="myPetsDiv d-flex justify-content-center vstack mx-5 mt-5 pb-4 border">
                    <p className="d-flex justify-content-center ">MY PETS</p>
                    <div className="border border-dark border-start-0 border-end-0 border-3 mx-4">
                        {dogs ? (
                            dogs.length > 0 ? (
                                dogs.map((dog, index) => (
                                    <Link key={dog.id} to={"/private/edit_pet/" + dog.id} className="d-flex">
                                        <h6><button type="button" className="btn btn-link">{dog.name}</button></h6>
                                    </Link>
                                ))
                            ) : (
                                <div className="alert alert-transparent d-flex justify-content-center">No pets found. Add a new pet to get started!</div>
                            )
                        ) : (
                            <div className="text-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                <div className="profileSettings mx-5 mt-5 border border-rounded">
                    <div className="d-flex justify-content-center mt-2"><p>Profile Settings</p></div>

                    <div className="d-flex justify-content-end mt-3 px-5 mb-5">


                        <button
                            type="button"
                            className="btn btn-light text-dark btn-outline-danger btn-sm rounded-0"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            {store.isAccountActive ? "DEACTIVATE ACCOUNT" : "REACTIVATE ACCOUNT"}
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
                                            onClick={store.isAccountActive ? handleDeactivation : handleReactivation}>
                                            {store.isAccountActive ? "Deactivate" : "Reactivate"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

