import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { Accordion } from 'react-bootstrap-accordion';
import 'react-bootstrap-accordion/dist/index.css';


const CardContinents = () => {

   const [{ filterContynente }, dispatch] = useStateValue()
   const [{ filterCity }] = useStateValue()


   return (



      <div>

         {/* <h1 className="cardMasterTitulo">Continents</h1> */}
         < div className='ContinentsContainer' >
            <>
               {filterContynente?.map((contynente) => (

                  <div className='cardContinentsContainer'>

                     <div className='imgCardContinent'>
                        <Linkrouter to="/CardTineraryAfrica"><img src={process.env.PUBLIC_URL + `/imgContinentesGlobo/${contynente.imageGlobo}`} alt="Imagen Globo del Continente" /></Linkrouter>
                     </div>

                     <Accordion title={contynente.nameContinents}>
                        <>
                           {filterCity?.map((cityContinente) => (
                              <ul className='cardUlContinent'>
                                 <li><Linkrouter className='item-Continent' to={`/access/${cityContinente._id}`}>{cityContinente.name}</Linkrouter></li>
                              </ul>
                           ))}
                        </>
                     </Accordion>

                  </div >
               ))}
            </>
         </div>

      </div >



   )
}

export default CardContinents;

{/* <div className='textCardContinents'>South America</div> */ }