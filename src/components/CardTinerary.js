import React from "react";
import CardContinents from "./CardContinents";
import { Link as Linkrouter } from 'react-router-dom';
import imgTineraryAfrica from './img/imgTinerary/imgTineraryAfrica.png';
import imgTineraryAsia from './img/imgTinerary/imgTineraryAsia.png';
import imgTineraryEurope from './img/imgTinerary/imgTineraryEurope.png';
import imgTineraryNorthAmerica from './img/imgTinerary/imgTineraryNorthAmerica.png';
import imgTineraryOceania from './img/imgTinerary/imgTineraryOceania.png';
import imgTinerarySouthAmerica from './img/imgTinerary/imgTinerarySouthAmerica.png';



const CardTineraryAfrica = () => {
    return (


        <div>

            <h1 className="cardMasterTitulo">Continents</h1>

            <div >
                <CardContinents />
            </div>

            <div className="tinerary" >
                <div className="cardTinerary">

                    <div className="titulo3">
                        <p>Africa</p>
                    </div>

                    <div className="tineraryImgInfo" >

                        <div className="tineraryImg" >
                            <img className="tineraryImg" src={imgTineraryAfrica} alt="Imagen de America del Sur" />
                        </div>

                        <div className="tineraryInfo" >
                            <div className="tineraryReadMore" >

                                <div>
                                    <p className="tineraryP">City</p>
                                    <p className="tineraryP">Country</p>
                                </div>
                                
                                <div>
                                    <p className="tineraryP">Itineraries Tours</p>
                                    <p className="tineraryPLink"><Linkrouter className="tineraryLink" to="/access">nameTour</Linkrouter></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardTineraryAfrica;