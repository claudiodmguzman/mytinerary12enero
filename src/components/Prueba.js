import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import Swicht from './Swicht';

const Prueba = () => {

    return (
        <div className="master">


            <nav className="cardMasterTitulo">
               
                <div>
                    <Swicht />
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