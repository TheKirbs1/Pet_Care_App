import React from "react";
import { Link } from "react-router-dom";
import small_mixed from "../../img/small_mixed.jpg"
export const Sml_Mixed_Card = () => {

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={small_mixed} className="card-img-top" alt="Small Mixed Breed" />
                <div className="card-body">
                    <h5 className="card-title">Small Mixed</h5>
                    <p className="card-text"><strong>Bred For:</strong> Companionship, Lapdog</p>
                    <Link to="/SmixedBreed">
                        <button type="button" className="btn btn-secondary">Learn More</button>
                    </Link>
                    <button className="btn btn btn-text-color mx-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}