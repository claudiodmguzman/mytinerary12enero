import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import img7 from '.img/imgPaises/img7-MACHU-PICCHU-PERU.jpg';
import img8 from '.img/imgPaises/img8-CHIMBORAZO-ECUADOR.jpg';
import img9 from '.img/imgPaises/img9-DESIERTO-DE-ATACAMA-CHILE.jpg';
import img10 from '.img/imgPaises/img10-GLACIAR-PERITO-MORENO-ARGENTINA.jpg';
import img11 from '.img/imgPaises/img11-LENCOIS-MARANHENSES-BRASIL.jpg';
import img12 from '.img/imgPaises/img12-LOS-ROQUES-VENEZUELA.jpg';

const Country = () => {
    return (
        <div className="master">

            <h1 className="cardMasterTitulo">the Countries...</h1>

            <div className="cardMaster">
                <div className="card">
                    <div className="image">
                        <img src={img7} />
                        <div className="imageTexto">
                            <p>COUNTRY_1</p>
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
                        <img src={img8} />
                        <div className="imageTexto">
                            <p>COUNTRY_2</p>
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
                        <img src={img9} />
                        <div className="imageTexto">
                            <p>COUNTRY_3</p>
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
                        <img src={img10} />
                        <div className="imageTexto">
                            <p>COUNTRY_4</p>
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
                        <img src={img11} />
                        <div className="imageTexto">
                            <p>COUNTRY_5</p>
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
                        <img src={img12} />
                        <div className="imageTexto">
                            <p>COUNTRY_6</p>
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

export default Country;