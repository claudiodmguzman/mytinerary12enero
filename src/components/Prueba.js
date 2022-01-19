import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import Swicht from './Swicht';

const Prueba = () => {

    return (
        <div className="master">


            <nav className="cardMasterTitulo">
                <div>
                    <Linkrouter className="linkDeco" to="/cities">Cities</Linkrouter>
                </div>
                <div className="linkDeco">
                    <Swicht />
                </div>
                <div>
                    <Linkrouter className="linkDeco" to="/continents">Continents</Linkrouter>
                </div>
            </nav>

            <div className="cardMaster">

                {/* <div>
                    <Card />
                </div> */}
            </div>
        </div>
    )
}

export default Prueba;