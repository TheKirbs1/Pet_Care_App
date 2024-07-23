import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Pet_details = () => {
  const { store, actions } = useContext(Context);
  const [singledog, setSingleDog] = useState([])
  const { name } = useParams()

  const isFavorite = (dog) => {
    return store.favoriteDog.some(favDog => favDog.name === dog.name);
  };

  useEffect(() => {

    const fetchingData = async () => {
      try {
        const res = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
        const data = await res.json()
        setSingleDog(data)
      }
      catch (error) {
        console.error(error)
      }
    }
    fetchingData()

  }, [name])


  return (
    <>
      <section className="container">
        {
          singledog.map((item) => (
            <div key={item.id}>
              <div className="container pt-5">
                <div className="row align-items-md-stretch">
                  <div className="col-md-6">
                    <div className="border border-5 border-gray rounded-3 mb-2">
                      <img src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`} alt={item.name} className="w-100 h-auto" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="h-100 p-5 bg-light border border-5 border-gray rounded-3">
                      <h1 className="text-center">{name}</h1>
                      <li><strong>Bred for : </strong>{item.bred_for}</li>
                      <li><strong>Bred Group : </strong>{item.breed_group}</li>
                      <li><strong>Life Span : </strong>{item.life_span}</li>
                      <li><strong>Temperament : </strong>{item.temperament}</li>
                      <li><strong>Origin : </strong>{item.origin}</li>
                      <li><strong>Weight : </strong>{item.weight.imperial}</li>
                      <li><strong>Height : </strong>{item.height.imperial}</li>
                      {/* <p><strong>Description : </strong>{item.description}</p> */}
                    </div>
                  </div>
                </div>

                <Link to={`/`}>
                  <button type="button" className="btn btn-secondary center mt-4">Back To Home</button>
                </Link>
                <button className="favBtn btn btn-text-color center favorite-btn" onClick={() => actions.addFavorite(item)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill={isFavorite(item) ? "rgb(235, 91, 0)" : "gray"} className="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                  </svg>
                </button>
              </div>
            </div>
          ))
        }
      </section>

    </>
  )
};