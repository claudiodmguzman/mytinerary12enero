import React from "react";
import CardContinents from "./CardContinents";
import { Link as Linkrouter } from 'react-router-dom';
import imgTinerarySouthAmerica from './img/imgTinerary/imgTinerarySouthAmerica.png'


const CardTinerarySouthAmerica = () => {
    return (


        <div>

            <h1 className="cardMasterTitulo">Continents</h1>

            <div >
                <CardContinents />
            </div>

            <div className="tinerary" >
                <div className="cardTinerary">

                    <div className="tineraryTitleZero">

                        <div className="tineraryTitle" >South</div>
                        <div className="tineraryTitle2" >America</div>

                    </div>

                    <h4 className="tinerarySubTitle" >view the itinerary by Continent</h4>

                    <div className="tineraryImgInfo" >

                        <div className="tineraryImg" >
                            <img className="tineraryImg" src={imgTinerarySouthAmerica} alt="Imagen de America del Sur" />
                        </div>

                        <div className="tineraryInfo" >
                            <div className="tineraryReadMore" >
                                <div>
                                    <p className="tineraryP">City</p>
                                    <p className="tineraryP">Money</p>
                                </div>
                                <div>
                                    <p className="tineraryP">Country</p>
                                    <p className="tineraryPLink"><Linkrouter className="tineraryLink" to="/access">read more...</Linkrouter></p>
                                </div>
                            </div>

                            <div className="tineraryReadMore" >
                                <div>
                                    <p className="tineraryP">City</p>
                                    <p className="tineraryP">Money</p>
                                </div>
                                <div>
                                    <p className="tineraryP">Country</p>
                                    <p className="tineraryPLink"><Linkrouter className="tineraryLink" to="/access">read more...</Linkrouter></p>
                                </div>
                            </div>

                            <div className="tineraryReadMore" >
                                <div>
                                    <p className="tineraryP">City</p>
                                    <p className="tineraryP">Money</p>
                                </div>
                                <div>
                                    <p className="tineraryP">Country</p>
                                    <p className="tineraryPLink"><Linkrouter className="tineraryLink" to="/access">read more...</Linkrouter></p>
                                </div>
                            </div>

                            <div className="tineraryReadMore" >
                                <div>
                                    <p className="tineraryP">City</p>
                                    <p className="tineraryP">Money</p>
                                </div>
                                <div>
                                    <p className="tineraryP">Country</p>
                                    <p className="tineraryPLink"><Linkrouter className="tineraryLink" to="/access">read more...</Linkrouter></p>
                                </div>
                            </div>

                            <div className="tineraryReadMore" >
                                <div>
                                    <p className="tineraryP">City</p>
                                    <p className="tineraryP">Money</p>
                                </div>
                                <div>
                                    <p className="tineraryP">Country</p>
                                    <p className="tineraryPLink"><Linkrouter className="tineraryLink" to="/access">read more...</Linkrouter></p>
                                </div>
                            </div>

                            <div className="tineraryReadMore" >
                                <div>
                                    <p className="tineraryP">City</p>
                                    <p className="tineraryP">Money</p>
                                </div>
                                <div>
                                    <p className="tineraryP">Country</p>
                                    <p className="tineraryPLink"><Linkrouter className="tineraryLink" to="/access">read more...</Linkrouter></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardTinerarySouthAmerica;