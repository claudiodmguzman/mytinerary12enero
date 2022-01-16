import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import img1 from './img/imgContinentes/img1-America-del-Sur.png';
// import img2 from './img/imgContinentes/img2-America-del-Norte.png';
// import img3 from './img/imgContinentes/img3-Africa.png';
// import img4 from './img/imgContinentes/img4-Asia.png';
// import img5 from './img/imgContinentes/img5-Europa.png';
// import img6 from './img/imgContinentes/img6-Oceania.png';

const Continents = () => {
    return (

        <div>
            <h1 className="cardMasterTitulo">Continents</h1>

            <div className="dropdown">

                <button data-toggle="dropdown" type="button" className="btn btn bg-transparent">
                    <img src={img1} alt="Imagen de America del Sur" />
                </button>

                <div className="dropdown-menu cardUlContinent">
                    <ul className="ulContinent">
                        <Linkrouter className="dropdown-item-Continent" to="/access">City1</Linkrouter>
                        <Linkrouter className="dropdown-item-Continent" to="/access">City2</Linkrouter>
                        <Linkrouter className="dropdown-item-Continent" to="/access">City3</Linkrouter>
                        <Linkrouter className="dropdown-item-Continent" to="/access">City4</Linkrouter>
                        <Linkrouter className="dropdown-item-Continent" to="/access">City5</Linkrouter>
                        <Linkrouter className="dropdown-item-Continent" to="/access">City6</Linkrouter>
                    </ul>


                </div>
            </div>

        </div>

    )
}

export default Continents;