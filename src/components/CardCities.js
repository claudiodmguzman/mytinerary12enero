import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import img3City from './img/imgCiudades/citiesAfrica/img3City-Marruecos-Essaouira.jpg';
// import img3City from './img/imgCiudades/citiesAmericaNorte/img2City-';
// import img4City from './img/imgCiudades/citiesAmericaSur/img3City-';
// import img5City from './img/imgCiudades/citiesAsia/img4City-';
// import img6City from './img/imgCiudades/citiesEuropa/img5City-';
// import img7City from './img/imgCiudades/citiesOceania/img6City-';



function CardCities() {

    return (

        <div className="card">
            <div className="image">
                <img src={img3City} />
                <div className="imageTexto">
                    <p>CITY_1</p>
                </div>
            </div>
            <div className="details">
                <div className="center">
                    <h1>City<br /><span>Country</span></h1>
                    <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                    <div className="ulCenter">
                        <ul>
                            <li><Linkrouter to="/access">access</Linkrouter></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardCities;