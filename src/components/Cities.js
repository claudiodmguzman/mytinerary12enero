import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import img2City from './img/imgCiudades/citiesAfrica/img2City-Egipto-El-Cairo.jpg';
import img3City from './img/imgCiudades/citiesAmericaNorte/img2City-EEUU-Chicago.jpg';
import img4City from './img/imgCiudades/citiesAmericaSur/img3City-Bolivia-La-Paz.png';
import img5City from './img/imgCiudades/citiesAsia/img4City-Japon-Tokio.jpg';
import img6City from './img/imgCiudades/citiesEuropa/img5City-Paises-Bajos-Amsterdam.jpg';
// import img7City from './img/imgCiudades/citiesOceania/img7City-';
// import Card from './Card'
// import Swicht from './Swicht';

const Cities = () => {

    return (
        <div className="master">

            {/* <div className="cardMasterTitulo">
                <Swicht />
            </div> */}


            <h1 className="cardMasterTitulo">Cities</h1>

            <div className="cardMaster">

                {/* <div>
                    <Card />
                </div> */}


                <div className="card">
                    <div className="image">
                        <img src={img2City} />
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

                <div className="card">
                    <div className="image">
                        <img src={img3City} />
                        <div className="imageTexto">
                            <p>CITY_2</p>
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

                <div className="card">
                    <div className="image">
                        <img src={img4City} />
                        <div className="imageTexto">
                            <p>CITY_3</p>
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
            </div>

            <div className="cardMaster">
                <div className="card">
                    <div className="image">
                        <img src={img5City} />
                        <div className="imageTexto">
                            <p>CITY_4</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Country<br /><span>Continent</span></h1>
                            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                            <div className="ulCenter">
                                <ul>
                                    <li><Linkrouter to="/access">access</Linkrouter></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="image">
                        <img src={img6City} />
                        <div className="imageTexto">
                            <p>CITY_5</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Country<br /><span>Continent</span></h1>
                            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                            <div className="ulCenter">
                                <ul>
                                    <li><Linkrouter to="/access">access</Linkrouter></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="image">
                        {/* <img src={img7City} /> */}
                        <div className="imageTexto">
                            <p>CITY_6</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Country<br /><span>Continent</span></h1>
                            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                            <div className="ulCenter">
                                <ul>
                                    <li><Linkrouter to="/access">access</Linkrouter></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cities;