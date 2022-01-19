import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import img6City from './img/imgCiudades/citiesAfrica/img6City-Tanzania-Dar-es-Salaam.jpg';
import img5City from './img/imgCiudades/citiesAmericaNorte/img5City-EEUU-Anchorage.jpg';
import img4City from './img/imgCiudades/citiesAmericaSur/img4City-Chile-Santiago-de-Chile.png';
import img3City from './img/imgCiudades/citiesAsia/img3City-Singapur-Singapur.jpg';
import img2City from './img/imgCiudades/citiesEuropa/img2City-Grecia-Atenas.jpg';
import img1City from './img/imgCiudades/citiesOceania/img1City-Nueva-Zelanda-Auckland.jpg';
// import Card from './Card'
// import Swicht from './Swicht';

const Cities = () => {

    return (
        <div className="master">

            {/* <div className="cardMasterTitulo">
                <Swicht />
            </div> */}


            <h1 className="cardMasterTitulo">Cities</h1>

            <nav className="encabezadoLinks">
                <Linkrouter className="linkDeco" to="/continents">Continents</Linkrouter>
            </nav>

            <div className="cardMaster">

                {/* <div>
                    <Card />
                </div> */}


                <div className="card">
                    <div className="image">
                        <img src={img6City} alt='img6City-Tanzania-Dar-es-Salaam.jpg' />
                        <div className="imageTexto">
                            <p>Dar es Salaam</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Dar es Salaam<br /><span>Tanzania</span></h1>
                            <p>Africa</p>
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
                        <img src={img5City} alt='img5City-EEUU-Anchorage.jpg' />
                        <div className="imageTexto">
                            <p>Anchorage</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Anchorage<br /><span>United States</span></h1>
                            <p>North America</p>
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
                        <img src={img4City} alt='img4City-Chile-Santiago-de-Chile.png' />
                        <div className="imageTexto">
                            <p>Santiago de Chile</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Santiago de Chile<br /><span>Chile</span></h1>
                            <p>South America</p>
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
                        <img src={img3City} alt='img3City-Singapur-Singapur.jpg' />
                        <div className="imageTexto">
                            <p>Singapore</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Singapore<br /><span>Singapore</span></h1>
                            <p>Asia</p>
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
                        <img src={img2City} alt='img2City-Grecia-Atenas' />
                        <div className="imageTexto">
                            <p>Athens</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Athens<br /><span>Creece</span></h1>
                            <p>Europe</p>
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
                        <img src={img1City} alt='img1City-Nueva-Zelanda-Auckland.jpg' />
                        <div className="imageTexto">
                            <p>Auckland</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Auckland<br /><span>New Zealand</span></h1>
                            <p>Oceania</p>
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