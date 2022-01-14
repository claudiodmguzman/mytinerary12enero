import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import imgCity1 from './imgCity1.jpg';
import imgCity2 from './imgCity2.jpg';
import imgCity3 from './imgCity3.jpg';
import imgCity4 from './imgCity4.jpg';
import imgCity5 from './imgCity5.jpg';
import imgCity6 from './imgCity6.jpg';

const Cities = () => {
    return (
        <div className="master">

            <h1 className="cardMasterTitulo">the Cities...</h1>

            <div className="cardMaster">
                <div className="card">
                    <div className="image">
                        <img src={imgCity1} />
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
                        <img src={imgCity2} />
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
                        <img src={imgCity3} />
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
                        <img src={imgCity4} />
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
                        <img src={imgCity5} />
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
                        <img src={imgCity6} />
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