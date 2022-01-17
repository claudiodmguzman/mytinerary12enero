import React, { Component } from 'react';
import img5City from './img/imgCiudades/citiesAfrica/img5City-Angola-Luanda.jpg';
import { Accordion } from 'react-bootstrap-accordion';
import 'react-bootstrap-accordion/dist/index.css';
// IMPORTAR TODAS LAS IMÁGENES DE CADA UNO DE LOS PAISES

const Access = () => {
    return (

        <div className="access">


            <div className="accessFondo">City</div>


            <div className="accessFondo">Country</div>

            <div className="accessImage">
                <img className="d-block w-100 accessImage" src={img5City} height="600" alt="First slide" />
            </div>


            <div className="accessFondo">
                Es una de las City del Country...
            </div>

            <div className="accessDetail" >
                <Accordion title='Expand Detail'>
                    <p className='paccessDetail' >detllgzflhddjkgfsgfhdgfhdsgfhdsgfdshg</p>
                    <p className='paccessDetail' >detllgzflhddjkgfsgfhdgfhdsgfhdsgfdshg</p>
                    <p className='paccessDetail' >detllgzflhddjkgfsgfhdgfhdsgfhdsgfdshg</p>
                    <p className='paccessDetail' >detllgzflhddjkgfsgfhdgfhdsgfhdsgfdshg</p>
                </Accordion>
            </div>


                <div className="accessFondo">User comments</div>

                <div className="accessFondo">Likes</div>
          

        </div>
    )
}

export default Access;