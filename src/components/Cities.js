import React from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import CardCities from './CardCities'


function Cities () {
    const [{cities}, dispatch] = useStateValue ()
    const {id}= useParams()
    const citiesSelecter = cities.filter(cities._id === id)

    console.log(citiesSelecter)
   
    return (
        <div className="master">

        <CardCities />

        </div>
    )
}

export default Cities;