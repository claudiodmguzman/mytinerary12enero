import React, { Component } from 'react';
import img1City from './img/imgCiudades/citiesAfrica/';
// IMPORTAR TODAS LAS IMÁGENES DE CADA UNO DE LOS PAISES

const Access = () => {
    return (
        <div className="access">

            <div className="accessGroupImg">

                <div className="accessGroup">

                    <div className="accessCyCo">
                        <div className="accessCity">City</div>
                        <div className="accessCountry">Country</div>
                    </div>

                    <div className="accessDesDet">

                        <div className="accessDescription">
                            Es una de las Cuty del Country...
                        </div>

                        <div className="accessDetail">
                            Expand Detail
                        </div>
                    </div>

                    <div className="accessComLik">
                        <div className="accessComment">User comments</div>
                        <div className="accessLike">Likes</div>
                    </div>
                </div>

                <div className="accessImage">
                    <img className="d-block w-100 accessImage" src={img1City} height="600" alt="First slide" />
                </div>

            </div>

        </div>
    )
}

export default Access;