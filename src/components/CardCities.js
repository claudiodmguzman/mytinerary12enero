import React from 'react';
import { useStateValue } from '../StateProvider';
import { Link as Linkrouter } from 'react-router-dom';
import searchFilters from './Filtro';


function CardCities () {

    const [{cities}, dispatch] = useStateValue ()

    searchFilters(".card-filter",".searching")

    return (

        <>
        {cities.map((city) => (
        <div className="card searching">
            <div className="image">
                { <img src={process.env.PUBLIC_URL+`/imgCiudades/${city.image}`} /> }
                <div className="imageTexto">
                    <p>{city.name}</p>
                </div>
            </div>
            <div className="details">
                <div className="center">
                    <h1>{city.name}<br /><span>{city.country}</span></h1>
                    <p>{city.textShort}</p>
                    <div className="ulCenter">
                        <ul>
                            <li><Linkrouter to={`/access/${city._id}`}>access</Linkrouter></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
))}
        </>

    )
}

export default CardCities;