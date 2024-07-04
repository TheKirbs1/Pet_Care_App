import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => {
	const [dogs, setDogs] = useState([])
        const [mySearch, setMySearch ]= useState("")
        const [displaySearch, setDisplaySearch]= useState(false)

        useEffect(() =>{
                const fetchingData = async () =>{
                        try {
                                const res = await fetch("https://api.thedogapi.com/v1/breeds")
                                const data = await res.json()
                                setDogs(data)
                        }
                        catch (error){
                                console.error(error)
                        }
                }
                setDisplaySearch
                fetchingData()
        }, [])

        const filterSearch = async()=>{
                try{
                        const res = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${mySearch}`)
                        const data = await res.json()
                        setDogs(data)

                } catch (error){
                   console.error(error)     
                }
        }

        const handleClick = (e) =>{
                filterSearch()
                setDisplaySearch(true)

                e.preventDefault()
        }

	return (
                <>
                  {!dogs ? (
                        <h1 className="text-center">Please make sure you search for a dog</h1>
                  ) : (
                        <>
                 <section>
                  <form onSubmit={handleClick}>
                          <div className="container-fluid">
               <div className="input-group rounded w-25 py-5 container d-flex justify-content-center">
                 <input type="search" name="search" id="search" className="form-control rounded" placeholder="Search"
                 aria-label="Search" aria-describedby="search-addon" value={mySearch} onChange={(e) => setMySearch(e.target.value)} />
                    <span className="input-group-text border-0" id="search-addon">
                     <i className="fas fa-search" onClick={handleClick}></i>
             </span>
              </div>
       </div>
       </form>

         <div className="card-container">
            {!displaySearch ? dogs.map((dog) =>(
                <div key={dog.id}>

                    <div className="card" style={{width: "18rem"}}>
                    
                    <img src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                          className="card-img-top"
                          alt={dog.name} />
		    
                        <div className="card-body">
                       <h5 className="card-title">{dog.name}</h5>
                     <p className="card-text"><strong>Bred_For :</strong> {dog.bred_for}</p>
                     <Link to={`/${dog.name}`}>
                     <button type="button" className="btn btn-secondary">Learn More</button>
		    </Link>
                     <button className="btn btn btn-text-color mx-4">
                     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                     <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                     </svg>
                     </button>
              </div>
             </div>

                </div>
               
          )) : <>
                 {dogs.map((dog) =>(
                <div key={dog.id}>

                    <div className="card" style={{width: "18rem"}}>
                    
                    <img src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                          className="card-img-top"
                          alt={dog.name} />
		    
                        <div className="card-body">
                       <h5 className="card-title">{dog.name}</h5>
                     <p className="card-text"><strong>Bred_For :</strong> {dog.bred_for}</p>
                     <Link to={`/${dog.name}`}>
                     <button type="button" className="btn btn-secondary">Learn More</button>
		    </Link>
                     <button className="btn btn btn-text-color mx-4">
                     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                     <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                     </svg>
                     </button>
              </div>
             </div>

                </div>
               
          ))}
          </>}                
       </div>
       </section>
                        </>
                  )}
                </>
)};
