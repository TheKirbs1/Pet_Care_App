import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/pet_registration.css";

export const Pet_registration = () => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [gender, setGender] = useState("");
    const [birth, setBirth] = useState(null);
    const [spayedNeutered, setSpayedNeutered] = useState("");
    const [weight, setWeight] = useState("");
    const [imageSizeError, setImageSizeError] = useState(false);
    const [uploadImage, setUploadImage] = useState(null)
    const [avatar, setAvatar] = useState(null);
    const navigate = useNavigate();

    const handleImageUpload = (event) => {
        const files = event.target.files;
        let file_size = files[0].size;
        if (file_size <= 100000) {
            setImageSizeError(false)

            setUploadImage(files[0]);
        } else {
            setImageSizeError(true)
            alert("Image is too large.")
        }
    };

    const handleSubmit = async () => {
        let dog = {
            name: name,
            breed: breed,
            gender: gender,
            birth: birth,
            spayedNeutered: spayedNeutered,
            weight: weight,
            avatar: uploadImage,
        }
        let success = await actions.savePetInfo(dog)
        if (success) {
            setName("")
            setBreed("")
            setGender("")
            setBirth("")
            setSpayedNeutered("")
            setWeight("")
            setAvatar(null)
            alert("Dog Successfully registered!");
            navigate("/private")
        } else {
            alert("An error ocurred while adding your dog to your account. Please, try again later.")
        }
    }

    return (
        <>
            <div className="pet-registration">
                <h2 className="text-center my-5">Pet Information</h2>
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3 fw-bold">
                                <label htmlFor="dogName" className="form-label">Dog name</label>
                                <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" id="dogName" aria-describedby="dogName" />
                            </div>
                            <div className="mb-4 fw-bold">
                                <label htmlFor="dogBreed" className="form-label">Breed</label>
                                <input onChange={(e) => setBreed(e.target.value)} value={breed} type="text" className="form-control" id="dogBreed" />
                            </div>

                            <div className="gender-buttons mb-3">
                                <h5 className="mb-3 mt-4">Gender</h5>
                                <input
                                    onChange={(e) => setGender("Male")}
                                    type="radio"
                                    value="Male"
                                    className="btn-check"
                                    name="options-outlined"
                                    id="male-outlined"
                                    autoComplete="off"
                                    defaultChecked=""
                                />
                                <label className="btn btn-outline-warning me-3 mb-3 px-5" htmlFor="male-outlined">
                                    Male
                                </label>
                                <input
                                    type="radio"
                                    onChange={(e) => setGender("Female")}
                                    value="Female"
                                    className="btn-check"
                                    name="options-outlined"
                                    id="female-outlined"
                                    autoComplete="off"
                                />
                                <label className="btn btn-outline-warning mb-3 px-5" htmlFor="female-outlined">
                                    Female
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="image-container me-3">
                                {uploadImage ? (
                                    <img
                                        src={URL.createObjectURL(uploadImage)}
                                        height="200"
                                        width="200"
                                        alt="Uploaded Preview"
                                        className="rounded-circle"
                                    />
                                ) : (
                                    <img
                                        src="https://static.vecteezy.com/system/resources/thumbnails/005/857/332/small_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg"
                                        height="200"
                                        width="200"
                                        alt="Placeholder"
                                        className="rounded-circle"
                                    />
                                )}
                            </div>
                            <div className="file-input-container">
                                <label htmlFor="imageInput" className="form-label">
                                    Upload picture
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="imageInput"
                                    aria-describedby="inputGroupFileAddon04"
                                    aria-label="Upload"
                                    onChange={handleImageUpload}
                                />
                            </div>
                            <div>
                                <h5 className="mb-3 mt-4">Date of Birth</h5>
                                <input
                                    type="date"
                                    className="ms-2"
                                    id="birthday"
                                    name="birthday"
                                    onChange={(e) => setBirth(e.target.value)}
                                />
                            </div>
                            <div className="spayed-neutered mb-3">
                                <h5 className="mb-3 mt-4">Spayed / Neutered</h5>
                                <input
                                    onChange={(e) => setSpayedNeutered("Yes")}
                                    value="Yes"
                                    type="radio"
                                    className="btn-check"
                                    name="options-outlined"
                                    id="yes-outlined"
                                    autoComplete="off"
                                    defaultChecked=""
                                />
                                <label className="btn btn-outline-warning me-3 mb-3 px-5" htmlFor="yes-outlined">
                                    Yes
                                </label>
                                <input
                                    onChange={(e) => setSpayedNeutered("No")}
                                    value="No"
                                    type="radio"
                                    className="btn-check"
                                    name="options-outlined"
                                    id="no-outlined"
                                    autoComplete="off"
                                />
                                <label className="btn btn-outline-warning mb-3 px-5" htmlFor="no-outlined">
                                    No
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <div className="weight-buttons mb-3 text-center">
                            <h5 className="mb-3 mt-4">Weight</h5>
                            <input
                                onChange={(e) => setWeight("0-25 lbs")}
                                type="radio"
                                value="0-25 lbs"
                                className="btn-check"
                                name="options-outlined"
                                id="option1-outlined"
                                autoComplete="off"
                                defaultChecked=""
                            />
                            <label className="btn btn-outline-warning me-3 mb-3 px-5" htmlFor="option1-outlined">
                                0-25lbs
                            </label>
                            <input
                                onChange={(e) => setWeight("25-50 lbs")}
                                value="25-50 lbs"
                                type="radio"
                                className="btn-check"
                                name="options-outlined"
                                id="option2-outlined"
                                autoComplete="off"
                            />
                            <label className="btn btn-outline-warning me-3 mb-3 px-5" htmlFor="option2-outlined">
                                25-50lbs
                            </label>
                            <input
                                onChange={(e) => setWeight("50-100 lbs")}
                                value="50-100 lbs"
                                type="radio"
                                className="btn-check"
                                name="options-outlined"
                                id="option3-outlined"
                                autoComplete="off"
                            />
                            <label className="btn btn-outline-warning me-3 mb-3 px-5" htmlFor="option3-outlined">
                                50-100lbs
                            </label>
                            <input
                                onChange={(e) => setWeight("100 + lbs")}
                                type="radio"
                                value="100 + lbs"
                                className="btn-check"
                                name="options-outlined"
                                id="option4-outlined"
                                autoComplete="off"
                            />
                            <label className="btn btn-outline-warning mb-3 px-5" htmlFor="option4-outlined">
                                100lbs +
                            </label>
                        </div>

                    </div>
                </div>
                <div className="text-center">
                    <button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-primary save-button">Save</button>
                </div>
            </div>
        </>
    )
};

