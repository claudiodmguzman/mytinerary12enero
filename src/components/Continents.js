import React from 'react';
import CardContinents from './CardContinents';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionType } from '../reducer';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Continents = () => {

    const [{ cities }, dispatch] = useStateValue()

    
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