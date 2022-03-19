import React from 'react';
import CardContinents from './CardContinents';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { Link as Linkrouter } from 'react-router-dom'
import { actionType } from '../reducer';



const Continents = () => {

    
    return (

        <div>

            <nav>

                <h1 className="cardMasterTitulo">Continents</h1>

            </nav>

            <div>
                <CardContinents />
            </div>

        </div>


    )
}

export default Continents;