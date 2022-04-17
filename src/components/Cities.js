import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import CardCities from './CardCities'
import { Link as Linkrouter } from 'react-router-dom'
import { actionType } from '../reducer';


function Cities() {

    const [{ cities }, dispatch] = useStateValue()

    const inputSearch = (event) => {
        dispatch({
            type: actionType.FILTER,
            value: event.target.value,



        })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({
            type: actionType.FILTER,
            value: "",
        })
    }, [])

    

    return (

        <div>

            <div className='search'>
                <input type="text" onChange={inputSearch} name="cityCountrySearch" className="formSearch card-filter" placeholder="enter the name of the city you want to search" />
            </div>

            <div className='decoContinents'>
                <Linkrouter className="linkDeco2" to="/continents">...Search by Continents</Linkrouter>
            </div>

            <div className="master">

                <CardCities />

            </div>
        </div>
    )
}

export default Cities;