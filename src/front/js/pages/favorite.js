import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Favorite = () => {
    const { store, actions } = useContext(Context);
    console.log(store.favoriteDog)

    return (
        <>
            {store.favoriteDog.map((dog, index) => (
                <div className="card-body" key={index}>
                    <img
                        src={dog.image_url || `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                        className="card-img-top"
                        alt={dog.name}
                    />
                    <h5 className="card-title">{dog.name}</h5>
                    <div className="bredFor">
                        <p className="card-text mb-2"><strong>Bred For:</strong> {dog.bred_for}</p>
                    </div>
                    <div className="card-buttons">
                        <Link to={`/${dog.name}`}>
                            <button type="button" className="learnMoreBtn btn btn-secondary">Learn More</button>
                        </Link>
                        <button className="favBtn btn btn-text-color mx-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
};