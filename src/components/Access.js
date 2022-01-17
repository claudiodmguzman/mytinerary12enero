import React, { Component } from 'react';
import img5City from './img/imgCiudades/citiesAfrica/img5City-Angola-Luanda.jpg';
import { Accordion } from 'react-bootstrap-accordion';
import 'react-bootstrap-accordion/dist/index.css';
// IMPORTAR TODAS LAS IMÁGENES DE CADA UNO DE LOS PAISES

const Access = () => {
    return (


        <div className="accessContainer">

            <div className='access' >


                <div className="accessFondo">PRAGA</div>


                <div className="accessFondo">REPÚBLICA CHECA</div>

                <div className="accessImage">
                    <img className="d-block w-100 accessImage" src={img5City} height="600" alt="First slide" />
                </div>


                <div className="accessFondo accessdet">
                Su belleza y patrimonio histórico la convierten en una de las veinte ciudades más visitadas del mundo.
                </div>

                <div className="accessDetail" >
                    <Accordion title='Expand Detail'>
                        <p className='paccessDetail' >
                        Praga (en checo, Praha, pronunciado /ˈpraɦa/ ( escuchar); en alemán, Prag, pronunciado /pʁaːk/ ( escuchar)) es la capital de la República Checa y de la región de Bohemia. Situada a orillas del río Moldava, tiene aproximadamente 1,2 millones de habitantes, lo que la convierte en la ciudad más poblada del país y la séptima de Europa Central. El área metropolitana de Praga cuenta con una población de 1,9 millones de habitantes. Su belleza y patrimonio histórico la convierten en una de las veinte ciudades más visitadas del mundo. Praga fue fundada a fines del siglo ix, convirtiéndose en una de las capitales más importantes de Europa en los siglos xviii y xix. Antigua capital del Reino de Bohemia y de Checoslovaquia, en el siglo xx sufrió los efectos de las dos guerras mundiales y de la dictadura nazi. Tras la segunda guerra quedó dentro de la esfera de influencia soviética. Tras la Revolución de terciopelo y la caída del Muro de Berlín la ciudad se ha ido adaptando a la economía de mercado. Praga, cuyo casco histórico fue declarado Patrimonio de la Humanidad en 1992, es considerada una ciudad global de «clase Beta+», a la altura de Roma, Atenas o Berlín.
                        </p></Accordion>
                </div>


                <div className="accessFondo">User comments</div>

                <div className="accessFondo">Likes</div>

            </div>
        </div>
    )
}

export default Access;