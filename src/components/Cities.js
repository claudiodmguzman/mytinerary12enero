import React from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import CardCities from './CardCities'
import { Link as Linkrouter } from 'react-router-dom'


function Cities() {
    const [{ cities }, dispatch] = useStateValue()


    return (

        <div>

            <div className='search'>
                <input type="search" name="cityCountrySearch" className="formSearch card-filter" placeholder="enter the name of the city or the country you want to search" />
            </div>

            <div className='decoContinents'>
                <Linkrouter className="linkDeco2" to="/continents">...go to Continents</Linkrouter>
            </div>


            <div className="master">

                <CardCities />

            </div>
        </div>
    )
}

export default Cities;