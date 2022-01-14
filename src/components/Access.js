import React, { Component } from 'react';
import img7 from './img/imgPaises/img7-MACHU-PICCHU-PERU.jpg';

const Access = () => {
    return (
        <div className="access">

            <div className="accessGroupImg">

                <div className="accessGroup">

                    <div className="accessCyCo">
                        <div className="accessCity">Machu Picchu</div>
                        <div className="accessCountry">Perú</div>
                    </div>

                    <div className="accessDesDet">

                        <div className="accessDescription">Uno de los lugares más mágicos del planeta. El atractivo de alcanzar la antigua ciudad de Machu Picchu, en el promontorio rocoso que une los cerros de Machu Picchu y Huayna Picchu, concentra a miles de viajeros que llegan a Perú atraídos por los misterios de esta maravilla de la civilización inca. Es Patrimonio de la Humanidad y una de las nuevas siete maravillas del mundo moderno.</div>

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
                    <img className="d-block w-100 accessImage" src={img7} height="600" alt="First slide" />
                </div>

            </div>

        </div>
    )
}

export default Access;