import React from 'react';
import Carrusel from './Carrusel';

const Home = () => {
    return (

        <div>
        
            <div className="homesweethome">

                <div className="descriptionZero" >

                    <div>

                        <p className='hola descrptionHome1'>
                            A new way to travel with MyItinerary. Discover our difference and live unique adventures based on the legacy of exploration and ecological education</p>

                        <p className='hola descrptionHome2'>
                            Some of our trips are accompanied by experts, photographers and explorers, offering our travelers an incomparable experience</p>

                        <p className='hola descrptionHome3'>
                            For all those who have in mind to know new destinations, if you need inspiration to decide what trip to take, these are popular and exotic destinations</p>

                    </div>

                </div>

            </div>

            <Carrusel />


        </div>

    )
}

export default Home;