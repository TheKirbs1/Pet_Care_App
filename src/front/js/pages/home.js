import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "../../styles/home.css";
import header_pups from "../../img/header_pups.png";

export const Home = () => {
    
    const [dogs, setDogs] = useState([]);
    const [mySearch, setMySearch] = useState("");
    const [displaySearch, setDisplaySearch] = useState(false);
    const [currentPage, setCurrentPage] = useState(0); 
    const perPage = 15; 
    const offset = currentPage * perPage;
    const currentPageData = dogs.slice(offset, offset + perPage);
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

        return (
        <>
        <section>
            <div className="homeHeader">
                <div className="headerCard">
                    <div className="row g-0">
                        <div className="col-md-4"></div>
                        <div className="col-md-2">
                        <img src={header_pups} className="headerImg img-fluid rounded-start" alt="Dog and its pup playing in a field" />
                        </div>
                        <div className="col-md-2">
                        <div className="header-card-body">

                                {/* replace with picture title */}
                                     <h5 className="headerCard-title">petPal</h5>


                            <p className="headerCard-text">Welcome to petPal! Get the insight you need to give your pet it's best life! From general breed facts, down to your own dogs needs, petPal is here to help every step of the way!</p>
                        </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
            <div className="search_Cards">
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
                                    <button className="favBtn btn btn btn-text-color mx-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {currentPageData.map((dog) => (
                        <div key={dog.id} className="card" style={{ width: "18rem" }}>
                            <img
                                src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                                className="card-img-top"
                                alt={dog.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{dog.name}</h5>
                                <div className="bredFor"><p className="card-text mb-2"><strong>Bred For:</strong> {dog.bred_for}</p></div>
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
                        </div>
                    ))}
                </div>


            <div>
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


