// import React, { useContext, useState } from "react";
// import { Context } from "../store/appContext";
// import "../../styles/pet_registration.css";

// export const Pet_registration = () => {
//     const { store, actions } = useContext(Context);
//     const [name, setName] = useState("");
//     const [breed, setBreed] = useState("");
//     const [gender, setGender] = useState("");
//     const [birth, setBirth] = useState(null);
//     const [spayedNeutered, setSpayedNeutered] = useState("");
//     const [weight, setWeight] = useState("");
//     const [imageSizeError, setImageSizeError] = useState(false);
//     const [uploadImage, setUploadImage] = useState(null)
//     const [file, setFile] = useState();
//     const [avatar, setAvatar] = useState(null);

    // const handleImageUpload = (event) => {
    //     const files = event.target.files;
    //     let file_size = files[0].size;
    //     if (file_size <= 100000) {
    //         setImageSizeError(false)
            
    //         setUploadImage(files[0]);
    //     } else {
    //         setImageSizeError(true)
    //     }
    // };
    // async function uploadPhoto(e) {
    //     const file = e.target.files[0];
    //     if (file.size > 3145728) {
    //       // 3 MB in bytes
    //       alert("File is too large. Maximum file size is 3MB.");
    //       return; // Exit the function if file is too large
    //     }
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //       const base64String = reader.result;
    //       // Check the size of base64 String, if necessary
    //       if (base64String.length > 3145728 * 1.37) {
    //         // Adjusting for base64 size increase
    //         alert("File is too large after conversion. Try a smaller file.");
    //         return;
    //       }
    //       setAvatar(base64String);
    //     };
    //     reader.readAsDataURL(file);
    //     setFile(URL.createObjectURL(file));
    //   }
    // const handleSubmit = async () => {
    //     let dog = {
    //         name: name,
    //         breed: breed,
    //         gender: gender,
    //         birth: birth,
    //         spayedNeutered: spayedNeutered,
    //         weight: weight,
    //         avatar: uploadImage,
    //     }
    //     let success = await actions.savePetInfo(dog) 
    //     if (success) {
    //     setName("")
    //     setBreed("")
    //     setGender("")
    //     setBirth("")
    //     setSpayedNeutered("")
    //     setWeight("")
    //     setAvatar(null)
    //     } else {
    //         alert("An error ocurred while adding your dog to your account. Please, try again later.")
    //     }
    // }


    // return (
    //     <>
    //         <div className="pet-registration">
    //             <h2 className="text-center my-5">Pet Information</h2>
    //             <div className="row">
    //                 <div className="col-md-6">
    //                     <form>
    //                         <div className="mb-3 fw-bold">
    //                             <label htmlFor="dogName" className="form-label">Dog name</label>
    //                             <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" id="dogName" aria-describedby="dogName" />
    //                         </div>
    //                         <div className="mb-4 fw-bold">
    //                             <label htmlFor="dogBreed" className="form-label">Breed</label>
    //                             <input onChange={(e) => setBreed(e.target.value)} value={breed} type="text" className="form-control" id="dogBreed" />
    //                         </div>

    //                         <div className="gender-buttons mb-3">
    //                             <h5 className="mb-3 mt-4">Gender</h5>
    //                             <input
    //                                 onChange={(e) => setGender("Male")}
    //                                 type="radio"
    //                                 value="Male"
    //                                 className="btn-check"
    //                                 name="options-outlined"
    //                                 id="male-outlined"
    //                                 autoComplete="off"
    //                                 defaultChecked=""
    //                             />
    //                             <label className="btn btn-outline-warning me-3 mb-3 px-5" htmlFor="male-outlined">
    //                                 Male
    //                             </label>
    //                             <input
    //                                 type="radio"
    //                                 onChange={(e) => setGender("Female")}
    //                                 value="Female"
    //                                 className="btn-check"
    //                                 name="options-outlined"
    //                                 id="female-outlined"
    //                                 autoComplete="off"
    //                             />
    //                             <label className="btn btn-outline-warning mb-3 px-5" htmlFor="female-outlined">
    //                                 Female
    //                             </label>
    //                         </div>
    //                     </form>
    //                 </div>
    //                 <div className="col-md-6">
    //                     <form>
    //                         <div>
    //                             <input
    //                                 type="file"
    //                                 className="form-control"
    //                                 id="imageInput"
    //                                 aria-describedby="inputGroupFileAddon04"
    //                                 aria-label="Upload"

    //                                 onChange={uploadPhoto}
    //                             />
    //                             {uploadImage ? (<img src={store.dog?.avatar} height="200" width="200" alt="Uploaded Preview" />) : (<img src="https://static.vecteezy.com/system/resources/thumbnails/005/857/332/small_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg"/>)}
    //                         </div>
    //                         <div>
    //                             <h5 className="mb-3 mt-4">Date of Birth</h5>
    //                             <input
    //                                 type="date"
    //                                 className="ms-2"
    //                                 id="birthday"
    //                                 name="birthday"
    //                                 onChange={(e) => setBirth(e.target.value)}
    //                             />
    //                         </div>
    //                         <div className="spayed-neutered mb-3">
    //                             <h5 className="mb-3 mt-4">Spayed / Neutered</h5>
    //                             <input
    //                                 onChange={(e) => setSpayedNeutered("Yes")}
    //                                 value="Yes"
    //                                 type="radio"
    //                                 className="btn-check"
    //                                 name="options-outlined"
    //                                 id="yes-outlined"
    //                                 autoComplete="off"
    //                                 defaultChecked=""
    //                             />
    //                             <label className="btn btn-outline-warning me-3 mb-3 px-5" htmlFor="yes-outlined">
    //                                 Yes
    //                             </label>
    //                             <input
    //                                 onChange={(e) => setSpayedNeutered("No")}
    //                                 value="No"
    //                                 type="radio"
    //                                 className="btn-check"
    //                                 name="options-outlined"
    //                                 id="no-outlined"
    //                                 autoComplete="off"
    //                             />
    //                             <label className="btn btn-outline-warning mb-3 px-5" htmlFor="no-outlined">
    //                                 No
    //                             </label>
    //                         </div>
    //                     </form>
    //                 </div>
    //             </div>
    //             <div className="row">
    //                 <div className="col-md">
    //                     <div className="weight-buttons mb-3 text-center">
    //                         <h5 className="mb-3 mt-4">Weight</h5>
    //                         <input
    //                             onChange={(e) => setWeight("0-25 lbs")}
    //                             type="radio"
    //                             value="0-25 lbs"
    //                             className="btn-check"
    //                             name="options-outlined"
    //                             id="option1-outlined"
    //                             autoComplete="off"
    //                             defaultChecked=""
    //                         />
    //                         <label className="btn btn-outline-warning me-3 mb-3 px-5" htmlFor="option1-outlined">
    //                             0-25lbs
    //                         </label>
    //                         <input
    //                             onChange={(e) => setWeight("25-50 lbs")}
    //                             value="25-50 lbs"
    //                             type="radio"
    //                             className="btn-check"
    //                             name="options-outlined"
    //                             id="option2-outlined"
    //                             autoComplete="off"
    //                         />
    //                         <label className="btn btn-outline-warning me-3 mb-3 px-5" htmlFor="option2-outlined">
    //                             25-50lbs
    //                         </label>
    //                         <input
    //                             onChange={(e) => setWeight("50-100 lbs")}
    //                             value="50-100 lbs"
    //                             type="radio"
    //                             className="btn-check"
    //                             name="options-outlined"
    //                             id="option3-outlined"
    //                             autoComplete="off"
    //                         />
    //                         <label className="btn btn-outline-warning me-3 mb-3 px-5" htmlFor="option3-outlined">
    //                             50-100lbs
    //                         </label>
    //                         <input
    //                             onChange={(e) => setWeight("100 + lbs")}
    //                             type="radio"
    //                             value="100 + lbs"
    //                             className="btn-check"
    //                             name="options-outlined"
    //                             id="option4-outlined"
    //                             autoComplete="off"
    //                         />
    //                         <label className="btn btn-outline-warning mb-3 px-5" htmlFor="option4-outlined">
    //                             100lbs +
    //                         </label>
    //                     </div>

    //                 </div>
    //             </div>
    //             <div className="text-center">
    //                 <button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-primary save-button">Save</button>
    //             </div>
    //         </div>
    //     </>
//     )
// };


import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
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
    const [uploadImage, setUploadImage] = useState(null);
    const [file, setFile] = useState(null);
    const [avatar, setAvatar] = useState(null);

    async function uploadPhoto(e) {
        const file = e.target.files[0];
        if (file.size > 3145728) {
            alert("File is too large. Maximum file size is 3MB.");
            return; // Exit the function if file is too large
        }
        const reader = new FileReader();
        reader.onload = () => {
            const base64String = reader.result;
            if (base64String.length > 3145728 * 1.37) {
                alert("File is too large after conversion. Try a smaller file.");
                return;
            }
            setAvatar(base64String);
        };
        reader.readAsDataURL(file);
        setFile(URL.createObjectURL(file));
        setUploadImage(file);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("name", name);
        formData.append("breed", breed);
        formData.append("gender", gender);
        formData.append("birth", birth);
        formData.append("spayedNeutered", spayedNeutered);
        formData.append("weight", weight);
        formData.append("file", uploadImage);

        let success = await actions.savePetInfo(formData);
        if (success) {
            setName("");
            setBreed("");
            setGender("");
            setBirth(null);
            setSpayedNeutered("");
            setWeight("");
            setAvatar(null);
            setFile(null);
            setUploadImage(null);
        } else {
            alert("An error occurred while adding your dog to your account. Please, try again later.");
        }
    }

    return (
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
                                onChange={() => setGender("Male")}
                                type="radio"
                                value="Male"
                                className="btn-check"
                                name="options-outlined"
                                id="male-outlined"
                                autoComplete="off"
                            />
                            <label className="btn btn-outline-warning me-3 mb-3 px-5" htmlFor="male-outlined">
                                Male
                            </label>
                            <input
                                type="radio"
                                onChange={() => setGender("Female")}
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
                        <div>
                            <input
                                type="file"
                                className="form-control"
                                id="imageInput"
                                aria-describedby="inputGroupFileAddon04"
                                aria-label="Upload"
                                onChange={uploadPhoto}
                            />
                            {file ? (
                                <img src={file} height="200" width="200" alt="Uploaded Preview" />
                            ) : (
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/857/332/small_2x/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg" height="200" width="200" alt="Default Preview" />
                            )}
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
                                onChange={() => setSpayedNeutered("Yes")}
                                value="Yes"
                                type="radio"
                                className="btn-check"
                                name="options-outlined"
                                id="yes-outlined"
                                autoComplete="off"
                            />
                            <label className="btn btn-outline-warning me-3 mb-3 px-5" htmlFor="yes-outlined">
                                Yes
                            </label>
                            <input
                                onChange={() => setSpayedNeutered("No")}
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
                            onChange={() => setWeight("0-25 lbs")}
                            type="radio"
                            value="0-25 lbs"
                            className="btn-check"
                            name="options-outlined"
                            id="option1-outlined"
                            autoComplete="off"
                        />
                        <label className="btn btn-outline-warning me-3 mb-3 px-5" htmlFor="option1-outlined">
                            0-25lbs
                        </label>
                        <input
                            onChange={() => setWeight("25-50 lbs")}
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
                            onChange={() => setWeight("50-100 lbs")}
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
                            onChange={() => setWeight("100 + lbs")}
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
                <button onClick={handleSubmit} type="submit" className="btn btn-primary save-button">Save</button>
            </div>
        </div>
    )
};
