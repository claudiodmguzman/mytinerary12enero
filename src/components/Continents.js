import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import img1 from './img/imgContinentes/img1-America-del-Sur.png';
import img2 from './img/imgContinentes/img2-America-del-Norte.png';
import img3 from './img/imgContinentes/img3-Africa.png';
import img4 from './img/imgContinentes/img4-Asia.png';
import img5 from './img/imgContinentes/img5-Europa.png';
import img6 from './img/imgContinentes/img6-Oceania.png';

const Country = () => {
    return (
        <div className="master">

            <h1 className="cardMasterTitulo">Continents</h1>

            <div className="cardMaster">
                <div className="card">
                    <div className="image">
                        <img src={img1} />
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
                        <img src={img2} />
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
                        <img src={img3} />
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
                        <img src={img4} />
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
                        <img src={img5} />
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
                        <img src={img6} />
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