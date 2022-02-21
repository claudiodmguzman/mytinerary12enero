import React from 'react';
import { useStateValue } from '../StateProvider';
import { Link as Linkrouter } from 'react-router-dom';


function CardCities () {

    const [{cities}, dispatch] = useStateValue ()

    return (

        <>
        {cities.map((cities) => (
        <div className="card">
            <div className="image">
                { <img src={process.env.PUBLIC_URL+`/imgCiudades/${cities.image}`} /> }
                <div className="imageTexto">
                    <p>{cities.name}</p>
                </div>
            </div>
            <div className="details">
                <div className="center">
                    <h1>{cities.name}<br /><span>{cities.country}</span></h1>
                    <p>{cities.textShort}</p>
                    <div className="ulCenter">
                        <ul>
                            <li><Linkrouter to={`/access/${cities._id}`}>access</Linkrouter></li>
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