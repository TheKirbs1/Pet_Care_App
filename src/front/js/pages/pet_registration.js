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
                <div className="form-container">
                    <form>
                    <input type="file" className="form-control mb-3" id="imageUploader" aria-describedby="uploader" onChange={(e)=>handleUpload(e)}/> 
                    {img && <img src={img} height="200" width="200" alt="Uploaded Preview" />}
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
                                    id="success-outlined"
                                    autoComplete="off"
                                    defaultChecked=""
                                />
                                <label className="btn btn-outline-warning me-1 mb-3 px-5" htmlFor="success-outlined">
                                    Male
                                </label>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="options-outlined"
                                    id="danger-outlined"
                                    autoComplete="off"
                                />
                                <label className="btn btn-outline-warning mb-3 px-5" htmlFor="danger-outlined">
                                    Female
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary save-button">Save</button>
                    </form>
                </div>
            </div>
        </>
)};