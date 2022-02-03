import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import img6City from './img/imgCiudades/citiesAfrica/img6City-Tanzania-Dar-es-Salaam.jpg';
import img5City from './img/imgCiudades/citiesAmericaNorte/img5City-EEUU-Anchorage.jpg';
import img4City from './img/imgCiudades/citiesAmericaSur/img4City-Chile-Santiago-de-Chile.png';
import img3City from './img/imgCiudades/citiesAsia/img3City-Singapur-Singapur.jpg';
import img2City from './img/imgCiudades/citiesEuropa/img2City-Grecia-Atenas.jpg';
import img1City from './img/imgCiudades/citiesOceania/img1City-Nueva-Zelanda-Auckland.jpg';
// import Card from './Card'
// import Swicht from './Swicht';
// import Prueba from './Prueba';
import CardCities from './CardCities'


const Cities = (data) => {
    const cities = data.data
   
    return (
        <div className="master">

        <CardCities cities={cities}/>

        </div>
    )
}

export default Cities;