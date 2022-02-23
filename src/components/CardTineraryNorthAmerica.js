import React from "react";
import CardContinents from "./CardContinents";
import { Link as Linkrouter } from 'react-router-dom';
import imgTineraryNorthAmerica from './img/imgTinerary/imgTineraryNorthAmerica.png'


const CardTineraryNorthAmerica = () => {
    return (


        <div>

            <h1 className="cardMasterTitulo">Continents</h1>

            <div >
                <CardContinents />
            </div>

            <div className="tinerary" >
                <div className="cardTinerary">

                    <div className="titulo3">
                        <p>North</p>
                    </div>

                    <div className="titulo4">
                        <p>America</p>
                    </div>

                    <div className="tineraryImgInfo" >

                        <div className="tineraryImg" >
                            <img className="tineraryImg" src={imgTineraryNorthAmerica} alt="Imagen de America del Sur" />
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

export default CardTineraryNorthAmerica;