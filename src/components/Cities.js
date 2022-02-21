import React from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import CardCities from './CardCities'
import { Link as Linkrouter } from 'react-router-dom'
import searchFilters from './Filtro';


function Cities() {
    const [{ cities }, dispatch] = useStateValue()
    
    searchFilters(".card-filter",".card")

    return (

        <div>

            <div className='search'>

                <input type="search" name="cityCountrySearch" className="formSearch card-filter" placeholder="enter the name of the city you want to search" />

            </div>

            <div className='decoContinents'>

                <Linkrouter className="linkDeco2" to="/continents">...go to Continents</Linkrouter>

            </div>


            <div className="master cards">

                <CardCities />

            </div>
        </div>
    )
}

export default Cities;