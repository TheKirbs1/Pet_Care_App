import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/private.css";

export const Private = () => {
    const { store, actions } = useContext(Context);
    const [authStatus, setAuthStatus] = useState("pending");
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const authenticate = async () => {
            let user = await actions.getProfile();
            if (user) {
                setUser(user)
                setAuthStatus("approved");
            } else {
                setAuthStatus("denied");
            }
        };
        authenticate();
    }, []);

    const calculateAge = (birthDate) => {
        const today = new Date();
        const birth = new Date(birthDate);
        let ageYears = today.getFullYear() - birth.getFullYear();
        let ageMonths = today.getMonth() - birth.getMonth();

        if (ageMonths < 0 || (ageMonths === 0 && today.getDate() < birth.getDate())) {
            ageYears--;
            ageMonths += 12;
        }

        if (ageYears === 1) {
            return "1 year";
        } else if (ageYears > 1) {
            return `${ageYears} years`;
        } else {
            return ageMonths === 1 ? "1 month" : `${ageMonths} months`;
        }
    }

    return (
        <div className="privatePageContainer">
            {authStatus === "pending" ? (
                <div
                    className="progress"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                >
                    <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        style={{ width: "75%" }}
                    />
                </div>
            ) : authStatus === "denied" ? (
                <div className="text-center mt-5">
                    <p>Access Denied. Please sign in to view this page.</p>
                    <button type="button" className="btn btn-primary" onClick={() => navigate('/login')}>Sign In</button>
                </div>
            ) : authStatus === "approved" ? (
                <div className="profile-container">
                    <div className="header"></div>
                    {user?.dogs && user.dogs.length > 0 ? (
                        user.dogs.filter((item, index) => index === selectedIndex).map(dog => (
                            <div key={dog.id}>
                                <div className="row justify-content-center">
                                    <div className="col-md-4">
                                        <Link to={"/private/edit_pet/" + dog.id}>
                                            <button className="btn mt-4 edit-button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                                </svg>
                                                <p>Edit profile</p>
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="col-md-4 ml-auto mr-auto">
                                        <div className="profile-picture d-flex flex-column justify-items-center align-items-center">
                                            <img
                                                src={dog.avatar ? dog.avatar : "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"}
                                                alt="profile picture"
                                                className="avatarPlaceholder"
                                            />
                                        </div>
                                        <div className="name justify-content-center align-items-center d-flex mt-5">
                                            <h3 key={dog.id} className="dogTitle">{dog.name}</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="right-buttons">
                                            <Link to="pet_registration">
                                                <button className="btn mt-4 add-pet">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                                    </svg>
                                                    <p className="mt-1">Add a Pet</p>
                                                </button>
                                            </Link>
                                            <button onClick={() => {
                                                if (selectedIndex === user.dogs.length - 1) {
                                                    setSelectedIndex(0)
                                                } else { setSelectedIndex(selectedIndex + 1) }
                                            }} className="btn switch-button mt-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 1 1 .708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5" />
                                                </svg>
                                                <p className="mt-1">Switch Pet</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-6 dog-info text-center mt-5">
                                        <div className="dog-age-title"><p>Age</p></div>
                                        <div className="vertical-line"></div>
                                        <div className="dog-breed-title"><p>Breed</p></div>
                                        <div className="vertical-line"></div>
                                        <div className="dog-gender-title"><p>Gender</p></div>
                                        <div className="vertical-line"></div>
                                        <div className="dog-weight-title"><p>Weight</p></div>
                                    </div>
                                    <div className="col-md-3"></div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 d-flex text-center"></div>
                                    <div className="col-md-6 dog-info mt-3 text-center">
                                        <div className="dog-age"><h5>{calculateAge(dog.birth)}</h5></div>
                                        <div className="dog-breed"><h5>{dog.breed}</h5></div>
                                        <div className="dog-gender"><h5>{dog.gender}</h5></div>
                                        <div className="dog-weight"><h5>{dog.weight}</h5></div>
                                    </div>
                                    <div className="col-md-3"></div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="card">
                            <div className="card-header"></div>
                            <div className="card-body">
                                <img src="https://images.unsplash.com/photo-1716675238240-bb58c1eaaa50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" />
                                <h3>Welcome</h3>
                                <p>Please add a pet to get started.</p>
                                <Link to="pet_registration">
                                    <button className="addFirstPet">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                        </svg>
                                        <span className="ml-2 ms-2"> Add a Pet</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <p>A problem has occurred.</p>
            )}
        </div>
    );
};
