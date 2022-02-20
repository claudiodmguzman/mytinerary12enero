import React from 'react';
import { useStateValue } from '../stateProvider';
import { Link as Linkrouter } from 'react-router-dom';
import img3City from './img/imgCiudades/citiesAfrica/img3City-Marruecos-Essaouira.jpg';



function CardCities() {

    const [{cities}, dispatch] = useStateValue ()

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