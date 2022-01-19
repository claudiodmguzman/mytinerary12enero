import React from 'react';
import CardContinents from './CardContinents';
// import { Link as Linkrouter } from 'react-router-dom';



const Continents = () => {
    return (

        <div>

            <nav className="cardMasterTitulo">

                <h1 className="cardMasterTitulo">Continents</h1>


                {/* <Linkrouter className="linkDeco" to="/cities">Cities</Linkrouter> */}
            
                {/* <Linkrouter className="linkDeco" to="/continents">Continents</Linkrouter> */}
            </nav>

            <div>
                <CardContinents />
            </div>

        </div>


    )
}

export default Continents;