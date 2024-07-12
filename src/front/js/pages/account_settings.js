import React, { useContext, useState, useEffect } from "react";
import simpleLogo from "../../img/simpleLogo.png";
import { Context } from "../store/appContext";

export const Account_settings = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    useEffect(() => {
        setEmail(store.userEmail || "");
        setPassword(store.userPassword || "");
    }, [store.userEmail, store.userPassword]);

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
                'An error occured, Please resubmitt your Info.'
            } else {
                'You have successfully edited your Information.'
            }
        }
    };
    const handleDeactivation = async () => {
        if (validateEmail() && validatePassword()) {
            const { msg, error } = await actions.deactivateAccount(email, password);
            if (error) {
                'You have a error Deactivating your account!'
            } else {
                'You have successfully Deactivated your account!'
            }
        }
    };

    const handleReactivation = async () => {
        if (validateEmail() && validatePassword()) {
            const { msg, error } = await actions.reactivateAccount(email, password);
            if (error) {
                'An error occurred while deactivating your account. Please try again later.'
            } else {
                'Your account has been deactivated successfully.'
            }
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center vstack">
                <div><h1>ACCOUNT SETTINGS</h1>

                </div>
                <img src={simpleLogo} className="img-fluid" />

                <div>

                    <label>EDIT EMAIL:</label><input type="email" placeholder={store.userEmail || "Enter your email"}
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>

                    <label className="pt-1">EDIT PASSWORD:</label><input type="password" placeholder={store.userPassword || "Enter your password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="dflex justify-content-start align-content-start pt-2">
                    <button type="button" className="btn btn-primary" onClick={handleEditUserSettings}>
                        Save
                    </button>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center vstack" >
                <b>PETS!</b>
                <h6><button type="button" className="btn btn-link">GOLDEN RETRIVER</button></h6>
                <h6><button type="button" className="btn btn-link">DALMATION</button></h6>


            </div>






            <div className="d-flex justify-content-center "> <b className="text-danger me-4">{store.isAccountActive ? "Deactivate Account" : "Reactivate Account"}</b>
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                                <button type="button" className="btn btn-danger" onClick={
                                    store.isAccountActive ? handleDeactivation : handleReactivation
                                }
                                >
                                    {store.isAccountActive ? "Deactivate" : "Reactivate"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};