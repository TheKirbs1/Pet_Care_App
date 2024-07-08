import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import small_mixed from "../../img/small_mixed.jpg"


export const Sml_Mixed_Breed_Details = () => {
    return (
        <div>
            <section className="container">
                <div className="container pt-5">
                    <div className="row align-items-md-stretch">
                        <div className="col-md-6">
                            <div className="border border-5 border-gray rounded-3 mb-2">
                                <img src={small_mixed} className="w-100 h-auto" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="h-100 p-5 bg-light border border-5 border-gray rounded-3">
                                <h1 className="text-center">Small Mixed Breeds</h1>
                                <li><strong>Bred for : </strong>Companionship, lapdog</li>
                                <li><strong>Bred Group : </strong>Mixed</li>
                                <li><strong>Life Span : </strong>12 - 16 years</li>
                                <li><strong>Temperament : </strong>Affectionate, Playful, Curious, Alert, Social, Intelligent</li>
                                <li><strong>Origin : </strong>small mixed breed dogs originate from a combination of natural mating, historical development, intentional breeding for specific traits, and unplanned matings.</li>
                                <li><strong>Weight : </strong>10 to 25 pounds</li>
                                <li><strong>Height : </strong>8 to 16 inches</li>
                                <p><strong>Description : </strong></p>
                            </div>
                        </div>
                    </div>
                    <Link to={`/`}>
                        <button type="button" className="btn btn-secondary center mt-4">Back To Home</button>
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
