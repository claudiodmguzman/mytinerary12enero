import React from 'react';
import { useStateValue } from '../StateProvider';
import { Link as Linkrouter } from 'react-router-dom';


function CardCities() {

    const [{cities}, dispatch] = useStateValue ()

    return (

        <div className="card">
            <div className="image">
                {/* <img src={img3City} /> */}
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
                            <li><Linkrouter to={`/access/${cities._id}`}>access</Linkrouter></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardCities;