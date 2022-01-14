import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import img13 from './img/imgPaises/img13-DESIERTO-DE-TATACOA-COLOMBIA.jpg';
import img14 from './img/imgPaises/img14-ILHA-GRANDE-BRASIL.jpg';
import img15 from './img/imgPaises/img15-LAGUNA-COLORADA-BOLIVIA.jpg';
import img16 from './img/imgPaises/img16-RORAIMA-LA-GRAN-SABANA-VENEZUELA-GUYANA-BRASIL.jpg';
import img17 from './img/imgPaises/img17-TORRES-DEL-PAINE-CHILE.jpg';
import img18 from './img/imgPaises/img18-CATARATAS-DE-IGUAZU-BRASIL-ARGENTINA.jpg';
import Swicht from './Swicht';

const Cities = () => {

    return (
        <div className="master">

            <div className="cardMasterTitulo">
                <Swicht />
            </div>


            <h1 className="cardMasterTitulo">the Cities...</h1>

            <div className="cardMaster">
                <div className="card">
                    <div className="image">
                        <img src={img13} />
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
                        <img src={img14} />
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
                        <img src={img15} />
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
                        <img src={img16} />
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
                        <img src={img17} />
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
                        <img src={img18} />
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