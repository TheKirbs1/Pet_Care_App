import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Favorite = () => {
    const { store, actions } = useContext(Context);
    // console.log(store.favoriteDog)

    const handleRemoveFavorite = (dog) => {
        actions.removeFavorite(dog.name);
    };

    return (
        <>
            <div className="card-container">
                {store.favoriteDog.map((dog, index) => (
                    <div className="card" style={{ width: "18rem" }} key={index}>
                        <img
                            src={dog.image_url || `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                            className="card-img-top"
                            alt={dog.name}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{dog.name}</h5>
                            <div className="bredFor">
                                <p className="card-text mb-2"><strong>Bred For:</strong> {dog.bred_for}</p>
                            </div>
                            <div className="card-buttons">
                                <Link to={`/${dog.name}`}>
                                    <button type="button" className="learnMoreBtn btn btn-secondary">Learn More</button>
                                </Link>
                                <button className="favBtn btn btn-text-color mx-4" onClick={() => handleRemoveFavorite(dog)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="rgb(235, 91, 0)" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};