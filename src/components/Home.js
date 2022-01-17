import React from 'react';
import Carrusel from './Carrusel';

const Home = () => {
    return (

        <div className="homesweethome">

            <div className='contenedorDescrption'>

                <div className="description">
                    <p class="descrptionHome1">Una nueva forma de viajar con MyTinerary. Descubre nuestra diferencia y vive aventuras únicas basadas en el legado de exploración y educación ecológica.</p>

                </div>

                <div className="description">
                    <p class="descrptionHome2">Algunos de nuestros viajes están acompañadas por expertos, fotógrafos y exploradores, ofreciendo a nuestros viajeros una experiencia incomparable.</p>

                </div>

                <div className="description">
                    <p class="descrptionHome3">Para todos aquellos que tengan en mente conocer nuevos destinos, si necesita inspiración para decidir qué viaje realizar, estos son destinos populares y exóticos.</p>

                </div>

                <div >
                    <Carrusel/>
                </div>

            </div>

            

        </div>


    )
}

export default Home;