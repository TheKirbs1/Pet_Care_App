import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import medium_mixed from "../../img/medium_mixed.jpg"
import "../../styles/med_mixed_breed_details.css";

export const Med_Mixed_Breed_Details = () => {
    return (
        <div className="med-mixed">
            <section className="container">
                <div className="container pt-5">
                    <div className="cardsDiv row align-items-md-stretch">
                        <div className="col-md-6">
                            <div className="border border-5 h-100 rounded-3 mb-2">
                                <img src={medium_mixed} className="w-100 h-100" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-card h-100 p-5 border border-5 rounded-3">
                                <h1 className="M-title text-center">Medium Mixed Breeds</h1>
                                <li><strong>Bred for : </strong>Companionship, Aesthetic Appeal, Utility and Versatility</li>
                                <li><strong>Bred Group : </strong>Mixed</li>
                                <li><strong>Life Span : </strong>10 - 14 years</li>
                                <li><strong>Temperament : </strong>Friendly, Energetic, Intelligent, Affectionate, Playful, Protective</li>
                                <li><strong>Origin : </strong>Medium mixed breeds origins reflect a blend of natural processes, intentional breeding practices, and historical development, resulting in dogs that are valued for their unique qualities and adaptability.</li>
                                <li><strong>Weight : </strong>25 to 50 pounds</li>
                                <li><strong>Height : </strong>16 to 22 inches</li>
                                {/* <p><strong>Description : </strong></p> */}
                            </div>
                        </div>
                    </div>
                    <Link to={`/`}>
                        <button type="button" className="home-btn btn-secondary center mt-4">Back To Home</button>
                    </Link>
                    <button className="btn btn btn-text-color center favorite-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg> Favorite
                    </button>
                </div>
            </section>
        </div>
    )
};
