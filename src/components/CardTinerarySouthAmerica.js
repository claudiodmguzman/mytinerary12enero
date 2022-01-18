import React from "react";
import CardContinents from "./CardContinents";
// import CardSouthAmerica from './CardSouthAmerica';
// import CardNorthAmerica from './CardNorthAmerica';
// import CardAfrica from './CardAfrica';
// import CardAsia from './CardAsia';
// import CardEurope from './CardEurope';
// import CardOceania from './CardOceania';


const CardTinerarySouthAmerica = () => {
    return (


        <div>

            <div >
                <CardContinents />
            </div>

            <div className="tinerary" >
                <div className="cardTinerary">
                    <h1 className="tineraryTitle" >CONTINENT NAME</h1>

                    <div className="tineraryImgInfo" >

                        <div className="tineraryImg" >
                            IMG
                        </div>

                        <div className="tineraryInfo" >
                            <div>
                                CITY 1
                            </div>

                            <div>
                                CITY 2
                            </div>

                            <div>
                                CITY 3
                            </div>

                            <div>
                                CITY 4
                            </div>

                            <div>
                                CITY 5
                            </div>

                            <div>
                                CITY 6
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardTinerarySouthAmerica;