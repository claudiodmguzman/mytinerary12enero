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
            </div>
        </div>
    )
}

export default Country;