import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { Accordion } from 'react-bootstrap-accordion';
import 'react-bootstrap-accordion/dist/index.css';

import img1 from './img/imgContinentes/img1-America-del-Sur.png';
import img2 from './img/imgContinentes/img2-America-del-Norte.png';
import img3 from './img/imgContinentes/img3-Africa.png';
import img4 from './img/imgContinentes/img4-Asia.png';
import img5 from './img/imgContinentes/img5-Europa.png';
import img6 from './img/imgContinentes/img6-Oceania.png';


const CardContinents = () => {

   const [{ filterContynente }, dispatch] = useStateValue()
   const [{ filterCity }] = useStateValue()


   return (

      <>
         {filterContynente?.map((contynente) => (

            <div>
               {/* <h1 className="cardMasterTitulo">Continents</h1> */}
               <div className='ContinentsContainer'>
                  <div className='cardContinentsContainer'>

                     <div className='imgCardContinent'>
                        <Linkrouter className='item-Continent' to="/CardTineraryAfrica"><img className="accessImage" src={process.env.PUBLIC_URL + `/imgContinentesGlobo/${contynente.imageGlobo}`} alt="Imagen Globo del Continente" /></Linkrouter>
                     </div>

                     <Accordion title={contynente.nameContinents}>
                       <>
                           {filterCity?.map((city) => (
                              <ul className='cardUlContinent'>
                                 <li><Linkrouter className='item-Continent' to={`/access/${city._id}`}>{city.name}</Linkrouter></li>
                              </ul>
                           ))}
                        </> 
                     </Accordion>

                  </div >
               </div>
            </div>

         ))}
      </>

   )
}

export default CardContinents;

{/* <div className='textCardContinents'>South America</div> */ }