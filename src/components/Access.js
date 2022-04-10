import React, { useEffect, useState } from 'react';
import imgGoogleMaps from './img/imgIcon/imgGoogleMaps.png';
import { useStateValue } from '../StateProvider';
import { Accordion } from 'react-bootstrap-accordion';
import 'react-bootstrap-accordion/dist/index.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Coment from './Coment';


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
        
        <div className="accessContainer1">

            {citiesSelecter.map((city) =>
                <div>

                    {/* <div>

                        <div className='accessGralInfoImg'>

                            <div>

                                <div className="accessFondo accName">{city.name}</div>

                                <div className="accessFondo accCountry">{city.country}</div>

                                <div className="accessFondo">Currency: {city.currency}</div>

                                <div className="accessFondo">Lenguege: {city.language}</div>

                                <div className="accessFondo">Demonym: {city.demonym}</div>

                                <div className="accessFondo">Timezone: {city.timezone}</div>

                                <div className="accessFondo">Population: {city.population}</div>

                                <div className="accessFondo">Coodinates: {city.coordinates}</div>

                                <div className="accessFondo">Continents: {city.continents}</div>

                                <div className="accessFondo">Region: {city.region}</div>

                                <div className="accessFondo"><a className='accessHref' href={city.googlemaps} target="_blank">Visit on Google Maps <img src={imgGoogleMaps} className="" height="25" width="20" alt="link a Google Maps" /></a></div>

                            </div>

                            <div>
                                <img className="accessImage" src={process.env.PUBLIC_URL + `/imgCiudades/${city.image}`} alt="image of city" />
                            </div>

                        </div>

                        <div className="accessGralDescription">{city.description}</div>

                    </div> */}

                    <div className='accessAcordion'>

                        {/* <div className="accessTitleItinerary">Thinks to Do...</div> */}

                        {itineraries.map((itinerarie) =>

                            <div className="accessDetail">

                                <Accordion title={itinerarie.nameTour}>

                                    {/* <div className='accessNameTour'>

                                        <div>
                                            <img className="accessImage" src={process.env.PUBLIC_URL + `/imgTour/${itinerarie.imgTour}`} alt="image of city" />
                                        </div>

                                        <div className="paccessDetail">{itinerarie.descriptionTour}</div>

                                        <div className="paccessDetail">Price: {itinerarie.priceTour}</div>

                                        <div className="paccessDetail">Duration: {itinerarie.durationTour}</div>

                                        <div className="paccessDetail">Available Languages: {itinerarie.availableLanguages}</div>


                                    </div> */}

                                    {/* <Coment /> */}
                                    <Coment itinerario={itinerarie._id}/>
                                    
                                </Accordion>



                            </div>

                        )}

                    </div>

                </div>
            )}

        </div>

    )
}

export default Access;