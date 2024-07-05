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
    return (
        <>
            <div className="pet-registration">
                <h2 className="text-center my-5">Pet Information</h2>
                <div className="form-container">
                    <form>
                    <input type="file" className="form-control" id="imageUpload" aria-describedby="emailHelp" onChange={(e)=>handleUpload(e)}/> 
                    {img && <img src={img} height="200" width="200" alt="Uploaded Preview" />}
                            <div className="mb-3 fw-bold">
                                <label htmlFor="exampleInputEmail1" className="form-label">Dog name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3 fw-bold">
                                <label htmlFor="exampleInputPassword1" className="form-label">Breed</label>
                                <input type="text" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <button type="submit" className="btn btn-primary save-button">Save</button>
                    </form>
                </div>
            </div>
        </>
)};