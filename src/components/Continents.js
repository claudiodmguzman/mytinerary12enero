import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import img1 from './img/imgContinentes/img1-America-del-Sur.png';
import img2 from './img/imgContinentes/img2-America-del-Norte.png';
import img3 from './img/imgContinentes/img3-Africa.png';
import img4 from './img/imgContinentes/img4-Asia.png';
import img5 from './img/imgContinentes/img5-Europa.png';
import img6 from './img/imgContinentes/img6-Oceania.png';

const Continents = () => {
    return (
        <div className="master">

            <h1 className="cardMasterTitulo">Continents</h1>

            <div className="cardMaster">

                <div className="cardContinente">
                    <div className="image">
                        <img src={img1} />

                    </div>

                    <div className="dropdown">

                        <button data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" type="button"
                            className="btn btn bg-transparent">
                            <p className="imageTexto">Amérci del Sur</p>
                        </button>

                        <div class="dropdown-menu">

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Linkrouter class="dropdown-item" to="/City1">City1</Linkrouter>
                                <Linkrouter class="dropdown-item" to="/City2">City2</Linkrouter>
                                <Linkrouter class="dropdown-item" to="/City3">City3</Linkrouter>
                                <Linkrouter class="dropdown-item" to="/City4">City4</Linkrouter>
                                <Linkrouter class="dropdown-item" to="/City5">City5</Linkrouter>
                                <Linkrouter class="dropdown-item" to="/City6">City6</Linkrouter>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Continents;