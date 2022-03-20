import React from "react";
import CardContinents from "./CardContinents";
import { Link as Linkrouter } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import imgTineraryAfrica from './img/imgTinerary/imgTineraryAfrica.png';
import imgTineraryAsia from './img/imgTinerary/imgTineraryAsia.png';
import imgTineraryEurope from './img/imgTinerary/imgTineraryEurope.png';
import imgTineraryNorthAmerica from './img/imgTinerary/imgTineraryNorthAmerica.png';
import imgTineraryOceania from './img/imgTinerary/imgTineraryOceania.png';
import imgTinerarySouthAmerica from './img/imgTinerary/imgTinerarySouthAmerica.png';



const CardTineraryAfrica = () => {

   const [{ filterContynente }, dispatch] = useStateValue()



   return (


      <div>

         <h1 className="cardMasterTitulo">Continents</h1>

         <div >
            <CardContinents />
         </div>

         <div className="tinerary" >

            <>
               {filterContynente?.map((contynente) => (

                  <div className="cardTinerary">

                     <div></div>

                     <div className="titulo3">
                        <p>{contynente.nameContinents}</p>
                     </div>

                     <div className="tineraryImgInfo" >



                        <div className="tineraryImg" >
                           {/* <img className="tineraryImg" src={imgTineraryAfrica} alt="Imagen de America del Sur" /> */}
                           <img className="tineraryImg" src={process.env.PUBLIC_URL + `/imgTineraryContinentes/${contynente.imageContinent}`} alt="Imagen Globo del Continente" />
                        </div>


                        <div className="tineraryInfo" >
                           <div className="tineraryReadMore" >

                              <div>
                                 <p className="tineraryP">City</p>
                                 <p className="tineraryP">Country</p>
                              </div>

                              <div>
                                 <p className="tineraryP">Itineraries Tours</p>
                                 <p className="tineraryPLink"><Linkrouter className="tineraryLink" to="/access">nameTour</Linkrouter></p>
                              </div>
                           </div>
                        </div>


                     </div>
                  </div>

               ))}
            </>

         </div>
      </div >

   )
}

export default CardTineraryAfrica;