import React, { useEffect, useState } from 'react';
import { useStateValue } from '../StateProvider';
import { Accordion } from 'react-bootstrap-accordion';
import 'react-bootstrap-accordion/dist/index.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Access = () => {

    const [itineraries, setItineraries] = useState([])

    const [{ cities }, dispatch] = useStateValue()

    const { id } = useParams()
    const citiesSelecter = cities.filter(city => city._id === id)


    useEffect(() => {
        citiesSelecter.map(city =>
            axios.get(`http://localhost:4000/api/itinerarios/${city.name}`)
                .then(response => setItineraries(response.data.response.itinerario)
                )
        )

    }, [])


    console.log(itineraries)

    return (


        <div className="accessContainer">

            {citiesSelecter.map((city) =>
                <div className='access' >


                    <div className="accessFondo">City: {city.name}</div>

                    <div className="accessFondo">Country: {city.country}</div>

                    <div className="accessFondo">Currency: {city.currency}</div>

                    <div className="accessFondo">Lenguege: {city.language}</div>

                    <div className="accessFondo">Demonym: {city.demonym}</div>

                    <div className="accessFondo">Timezone: {city.timezone}</div>

                    <div className="accessFondo">Population: {city.population}</div>

                    <div className="accessImage">
                        <img className="d-block w-100 accessImage" src={process.env.PUBLIC_URL + `/imgCiudades/${city.image}`} height="600" alt="image of city" />
                    </div>

                    <div className="accessDetail" >
                        <Accordion title='Expand Detail'>
                            <p className='paccessDetail' >{city.description}</p></Accordion>
                    </div>


                    <div className="accessFondo">Coodinates: {city.coordinates}</div>

                    <div className="accessFondo">Google Maps: {city.googlemaps}</div>

                    <div className="accessFondo">Continents: {city.continents}</div>

                    <div className="accessFondo">Region: {city.region}</div>

                    <div className="accessTitleItinerary">The most of MyTinerary</div>

                    {itineraries.map((itinerarie) =>

                        <div>

                            <div className="accessFondo">{itinerarie.nameTour}</div>

                            <div className="accessFondo">{itinerarie.descriptionTour}</div>

                            <div className="accessFondo">{itinerarie.priceTour}</div>

                            <div className="accessFondo">{itinerarie.durationTour}</div>

                            <div className="accessFondo">{itinerarie.availableLanguages}</div>

                            {/* <div className="accessFondo">{itinerarie.imgTour}</div> */}

                            <img className="d-block w-100 accessImage" src={process.env.PUBLIC_URL + `/imgTour/${itinerarie.imgTour}`} height="600" alt="image of city" />

                        </div>

                    )}

                </div>
            )}

        </div>

    )
}

export default Access;