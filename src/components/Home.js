import React from 'react';
import Carrusel from './Carrusel';

const Home = () => {
    return (

        <div className="homesweethome">

            <div className='contenedorDescrption'>

                <div className="description">
                    <p class="descrptionHome1">A new way to travel with MyTinerary. Discover our difference and live unique adventures based on the legacy of exploration and ecological education</p>

                </div>

                <div className="description">
                    <p class="descrptionHome2">
Some of our trips are accompanied by experts, photographers and explorers, offering our travelers an incomparable experience</p>

                </div>

                <div className="description">
                    <p class="descrptionHome3">
For all those who have in mind to know new destinations, if you need inspiration to decide what trip to take, these are popular and exotic destinations</p>

                </div>

                <div >
                    <Carrusel/>
                </div>

            </div>

            

        </div>


    )
}

export default Home;