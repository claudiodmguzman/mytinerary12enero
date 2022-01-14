import React from 'react';
import Carrusel from './Carrusel';

const Home = () => {
    return (

        <div className="homesweethome">

            <div className='contenedorDescrption'>

                <div className="description">
                    <p class="descrptionHome1">América del Sur fue estudiada, medida y mostrada por dos de los más grandes viajeros de todos los tiempos: Alexander Humboldt y Charles Darwin. Si el primero recorrió Latinoamérica durante tres años, el segundo pasó por las costas de Brasil, Argentina, Chile y las Islas Galápagos en su recorrido de vuelta al mundo con el Beagle. Los dos observaron algunos de los paisajes más asombrosos de América del Sur.</p>

                </div>

                <div className="description">
                    <p class="descrptionHome2">En la actualidad Sudamérica es atractiva por diferentes motivos. Su cultura, su gastronomía y su aún menor impacto en el turismo global la hacen un destino atractivo para muchos viajeros que quieren conocer lugares diferentes.</p>

                </div>

                <div className="description">
                    <p class="descrptionHome3">Para todos aquellos que tengan en mente conocer nuevos destinos, si necesita inspiración para decidir qué viaje realizar, estos son destinos populares de América del Sur.</p>

                </div>

                <div>
                    <Carrusel/>
                </div>

            </div>

            

        </div>


    )
}

export default Home;