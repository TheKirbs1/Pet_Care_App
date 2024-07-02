import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const Pet_details = () => {
    const [singledog, setSingleDog] = useState([])
    const {name} =useParams()

    useEffect(() => {

        const fetchingData = async () =>{
            try {
                    const res = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
                    const data = await res.json()
                    console.log(data)
                    setSingleDog(data)
            }
            catch (error){
                    console.error(error)
            }
    }
    fetchingData()

    }, [name])

    return (
        <>
           <section className="container">
             {
                singledog.map((item) =>(
                    <div key={item.id}>
            <div className="container pt-5">
                <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="border border-5 border-gray rounded-3 mb-2">
            <img src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`} alt="" className="w-100 h-auto"/>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border border-5 border-gray rounded-3">
        <h1 className="text-center">{name}</h1>
        <li><strong>Bred for : </strong>{item.bred_for}</li> 
        <li><strong>Bred Group : </strong>{item.breed_group}</li>
        <li><strong>Life Span : </strong>{item.life_span}</li>
        <li><strong>Temperament : </strong>{item.temperament}</li>
        <li><strong>Origin : </strong>{item.origin}</li>
        <li><strong>Weight : </strong>{item.weight.imperial}</li>
        <li><strong>Height : </strong>{item.height.imperial}</li>
        <p><strong>Description : </strong>{item.description}</p>
        </div>
      </div>
    </div>
    <Link to={`/`}>
                     <button type="button" className="btn btn-secondary center mt-4">Back To Home</button>
		    </Link>
    </div>
                    </div>
                ))
             }
           </section>
           
        </>
)};