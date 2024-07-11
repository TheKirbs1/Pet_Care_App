import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Account_settings = () => {
    const { store,actions } = useContext(Context);
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
        } else if (password.length >20) {
            setPasswordError("Password must be less than 20 characters long");
            return false;
        }
        setPasswordError(null);
        return true;
    };

    const handleDeactivation = () => {
        if (validateEmail() && validatePassword()) {
            actions.deactivateAccount(email, password);
        }
    };
    return (
        <>

            <div>

                <label>USER-EMAIL</label><input type="email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>

                <label>USER-PASSWORD</label><input type="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div>
                    PETS!

            </div>



            <div> <b className="text-danger">Deactivate Account</b>
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Deactivate
                </button>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Account Deactivation</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Are you sure you want to deactivate your account?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-danger" onClick={() => handleDeactivation()}>Deactivate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};