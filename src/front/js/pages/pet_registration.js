import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/pet_registration.css";

export const Pet_registration = () => {
    const [img, setImg] = useState("")
    const handleUpload = (e) => {
        if(e.target.files.length == 1) {
            setImg(URL.createObjectURL(e.target.files[0])) 
        } 
    }
    console.log(img)
    const [chosenColor, setChosenColor] = useState("")

    return (
        <>
            <div className="pet-registration">
                <h2 className="text-center my-5">Pet Information</h2>
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3 fw-bold">
                                <label htmlFor="dogName" className="form-label">Dog name</label>
                                <input type="text" className="form-control" id="dogName" aria-describedby="dogName"/>
                            </div>
                            <div className="mb-3 fw-bold">
                                <label htmlFor="dogBreed" className="form-label">Breed</label>
                                <input type="text" className="form-control" id="dogBreed"/>
                            </div>
                            
                            <div className="gender-buttons mb-3">
                                <input
                                    type="radio"
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
                            <input type="file" className="form-control mb-3" id="imageUploader" aria-describedby="uploader" onChange={(e)=>handleUpload(e)}/> 
                            {img && <img src={img} height="200" width="200" alt="Uploaded Preview" />}
                            <div className="spayed-neutered mb-3">
                                <input
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
                        <div className="weight-buttons mb-3">
                            <input
                                type="radio"
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
                                type="radio"
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
                <button type="btn" className="btn btn-primary save-button">Save</button>
                </div>
            </div>
        </>
)};