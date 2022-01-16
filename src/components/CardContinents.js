import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import img1 from './img/imgContinentes/img1-America-del-Sur.png';
import img2 from './img/imgContinentes/img2-America-del-Norte.png';
import img3 from './img/imgContinentes/img3-Africa.png';
import img4 from './img/imgContinentes/img4-Asia.png';
import img5 from './img/imgContinentes/img5-Europa.png';
import img6 from './img/imgContinentes/img6-Oceania.png';
import { Accordion } from 'react-bootstrap-accordion'



const Continents = () => {
    return (


        <div>
            <h1 className="cardMasterTitulo">Continents</h1>

            <div className='cardContinentsContainer'>

                <div className="dropdown">
                    <div className='textCardContinents'>South America</div>
                    <img src={img1} alt="Imagen de America del Sur" />

                    <div className='App'>
                        <Accordion >
                            este es un acordion
                        </Accordion>
                    </div>

                </div>
            </div >

        </div>

    )
}

export default Continents;

