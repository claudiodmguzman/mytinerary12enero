import React, { Component } from 'react';
import img1City from './img/imgCiudades/citiesAfrica/img1City-Sudafrica-Ciudad-del-Cabo.jpg';
import img2City from './img/imgCiudades/citiesAmericaNorte/img2City-EEUU-Chicago.jpg';
import img3City from './img/imgCiudades/citiesAmericaSur/img3City-Bolivia-La-Paz.png';
import img4City from './img/imgCiudades/citiesAsia/img4City-Japon-Tokio.jpg';
import img5City from './img/imgCiudades/citiesEuropa/img5City-Paises-Bajos-Amsterdam.jpg';
import img6City from './img/imgCiudades/citiesOceania/img6City-Australia-Perth.jpg';
import Carousel from 'react-elastic-carousel';
import CardCarrusel from './CardCarrusel';


function Carrusel() {

    const breakPoints = [
        { width: 600, itemsToShow: 1 },
        { width: 800, itemsToShow: 2 },
        { width: 1000, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    return (
        <div>
            <Carousel breakPoints={breakPoints}>
                <CardCarrusel number="1" />
                <CardCarrusel number="2" />
                <CardCarrusel number="3" />
                <CardCarrusel number="4" />
                <CardCarrusel number="5" />
                <CardCarrusel number="6" />
                <CardCarrusel number="7" />
                <CardCarrusel number="8" />
                <CardCarrusel number="9" />
                <CardCarrusel number="10" />
            </Carousel>
        </div>
    )
}

export default Carrusel;

