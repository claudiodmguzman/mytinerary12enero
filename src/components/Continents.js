import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import img7 from './img/imgPaises/img7-MACHU-PICCHU-PERU.jpg';
import img8 from './img/imgPaises/img8-CHIMBORAZO-ECUADOR.jpg';
import img9 from './img/imgPaises/img9-DESIERTO-DE-ATACAMA-CHILE.jpg';
import img10 from './img/imgPaises/img10-GLACIAR-PERITO-MORENO-ARGENTINA.jpg';
import img11 from './img/imgPaises/img11-LENCOIS-MARANHENSES-BRASIL.jpg';
import img12 from './img/imgPaises/img12-LOS-ROQUES-VENEZUELA.jpg';

const Country = () => {
    return (
        <div className="master">

            <h1 className="cardMasterTitulo">the Countries...</h1>

            <div className="cardMaster">
                <div className="card">
                    <div className="image">
                        <img src={img7} />
                        <div className="imageTexto">
                            <p>PERÚ</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Machu Picchu<br /><span>Perú</span></h1>
                            <p>Es Patrimonio de la Humanidad y una de las nuevas siete maravillas del mundo moderno</p>
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
                            <p>ECUADOR</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Chimborazo<br /><span>Ecuador</span></h1>
                            <p>Medido desde el centro de la tierra, es el punto más lejano del planeta al que puedes llegar sin volar</p>
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
                            <p>CHILE</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Desierto de Atacama<br /><span>Chile</span></h1>
                            <p>Es el mejor sitio del planeta para observar el firmamento</p>
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
                            <p>ARGENTINA</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Glaciar Perito Moreno<br /><span>Argentina</span></h1>
                            <p>Se trata del glaciar con más fácil acceso de todo el planeta</p>
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
                            <p>BRASIL</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Lençóis Maranhenses<br /><span>Brasil</span></h1>
                            <p>Se forman centenares de lagunas de color azulado o verdoso, cercadas por dunas de arena blanca</p>
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
                            <p>VENEZUELA</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="center">
                            <h1>Los Roques<br /><span>Venezuela</span></h1>
                            <p>Su singularidad y belleza se debe en parte por la formación de una estructura de atolón</p>
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