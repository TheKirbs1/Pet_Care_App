import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "../../styles/home.css";
import header_pups from "../../img/header_pups.png";
import background from "../../img/background11.png";
import { Context } from "../store/appContext";

export const Home = () => {

    const [dogs, setDogs] = useState([]);
    const [mySearch, setMySearch] = useState("");
    const [displaySearch, setDisplaySearch] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const perPage = 15;
    const offset = currentPage * perPage;
    const currentPageData = dogs.slice(offset, offset + perPage);
    const { store, actions } = useContext(Context)
    const [mixedCards] = useState([
        {
            id: "mixed1",
            imgSrc: require("../../img/small_mixed.jpg").default,
            title: "Small Mixed",
            bredFor: "Companionship, Lapdog",
            link: "/SmixedBreed"
        },
        {
            id: "mixed2",
            imgSrc: require("../../img/medium_mixed.jpg").default,
            title: "Medium Mixed",
            bredFor: "Companionship, Aesthetic Appeal, Utility and Versatility",
            link: "/MmixedBreed"
        },
        {
            id: "mixed3",
            imgSrc: require("../../img/large_mixed_dog.jpg").default,
            title: "Large Mixed",
            bredFor: "Performance, Sport, Guarding, Hunting",
            link: "/LmixedBreed"
        }
    ]);

    useEffect(() => {
        fetchingData();
    }, []);

    const fetchingData = async () => {
        try {
            const res = await fetch("https://api.thedogapi.com/v1/breeds");
            const data = await res.json();
            const dogsWithDefaultBredFor = data.map(dog => ({
                ...dog,
                bred_for: dog.bred_for || "Companionship"
            }));
            const pitbull = dogsWithDefaultBredFor.find(dog => dog.name === "American Pit Bull Terrier");
            if (pitbull) {
                pitbull.image_url = "https://cdn2.thedogapi.com/images/HkC31gcNm.png";
            }
            const greatPyrenees = dogsWithDefaultBredFor.find(dog => dog.name === "Great Pyrenees");
            if (greatPyrenees) {
                greatPyrenees.image_url = "https://cdn2.thedogapi.com/images/B12uzg9V7.png";
            }
            const saintBernard = dogsWithDefaultBredFor.find(dog => dog.name === "Saint Bernard");
            if (saintBernard) {
                saintBernard.image_url = "https://cdn2.thedogapi.com/images/_Qf9nfRzL.png";
            }

            setDogs(dogsWithDefaultBredFor);
        } catch (error) {
            console.error(error);
        }
    };


    const filterSearch = async () => {
        try {
            const res = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${mySearch}`);
            const data = await res.json();
            const dogsWithDefaultBredFor = data.map(dog => ({
                ...dog,
                bred_for: dog.bred_for || "Companionship"
            }));
            setDogs(dogsWithDefaultBredFor);
            setDisplaySearch(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        filterSearch();
    };

    const handlePaginationClick = (data) => {
        const selectedPage = data.selected;
        setCurrentPage(selectedPage);
    };

    const isFavorite = (dog) => {
        return store.favoriteDog.some(favDog => favDog.name === dog.name);
    };

    return (
        <>
            <section>
                <div className="search_Cards" style={{
                    backgroundImage: "url(" + background + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'repeat'
                }}>
                    <div className="homeHeader">
                        <div className="headerCard">
                            <div className="row g-0">
                                <div className="col-md-3"></div>

                                <div className="col-md-6">
                                    <div className="header-card-body">

                                        <h1 className="headerCard-title">Welcome to the evolution of pet care!</h1>

                                        <p className="headerCard-text">We are here to give the insight you need to give your pet it's best life! From general breed facts, down to your own dogs needs, petPal is here to help every step of the way!</p>
                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleClick}>
                        <div className="container-fluid">
                            <div className="input-group rounded w-25 py-5 container d-flex justify-content-center">
                                <input
                                    type="search"
                                    name="search"
                                    id="search"
                                    className="form-control rounded"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="search-addon"
                                    value={mySearch}
                                    onChange={(e) => setMySearch(e.target.value)}
                                />
                                <span className="input-group-text border-0" id="search-addon">
                                    <i className="fas fa-search" onClick={handleClick}></i>
                                </span>
                            </div>
                        </div>
                    </form>
                    <div className="card-container">
                        {!displaySearch && currentPage === 0 && mixedCards.map((card) => (
                            <div className="card" key={card.id} style={{ width: "18rem" }}>
                                <img src={card.imgSrc} className="card-img-top" alt={card.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <div className="bredFor"><p className="card-text mb-2"><strong>Bred For:</strong> {card.bredFor}</p></div>
                                    <div className="card-buttons">
                                        <Link to={card.link}>
                                            <button type="button" className="learnMoreBtn btn btn-secondary">Learn More</button>
                                        </Link>
                                        <button className="favBtn btn btn btn-text-color mx-4" onClick={() => actions.addFavorite(card)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill={isFavorite(card) ? "rgb(235, 91, 0)" : "gray"} className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {currentPageData.map((dog) => (
                            <div key={dog.id} className="card" style={{ width: "18rem" }}>
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
                                        <button className="favBtn btn btn-text-color mx-4" onClick={() => actions.addFavorite(dog)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill={isFavorite(dog) ? "rgb(235, 91, 0)" : "gray"} className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="paginate">
                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            pageCount={Math.ceil(dogs.length / perPage)}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onPageChange={handlePaginationClick}
                            containerClassName={'pagination justify-content-center'}
                            pageClassName={'page-item'}
                            pageLinkClassName={'page-link'}
                            previousClassName={'page-item'}
                            previousLinkClassName={'page-link'}
                            nextClassName={'page-item'}
                            nextLinkClassName={'page-link'}
                            breakClassName={'page-item'}
                            breakLinkClassName={'page-link'}
                            activeClassName={'active'}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}


