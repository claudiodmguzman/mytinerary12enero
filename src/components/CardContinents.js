import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { Accordion } from 'react-bootstrap-accordion';
import 'react-bootstrap-accordion/dist/index.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const CardContinents = () => {

   const [{ filterContynente }, dispatch] = useStateValue()
   const [{ continentes }] = useStateValue()
   const [Cities, setCities] = useState([])
   const { id } = useParams()
   const continentesSelecter = continentes.filter(contynente => contynente._id === id)

   useEffect(() => {
      continentesSelecter.map(contynente =>
         axios.get(`http://localhost:4000/api/continentarios/${contynente.continents}`)
            .then(response => setCities(response.data.response.continentario)
            )
      )
   }, [])


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

                     <div>

                        <Accordion title={contynente.nameContinents}>
                           <>
                              {Cities.map((cityContinente) => (
                                 <ul className='cardUlContinent'>
                                    <li><Linkrouter className='item-Continent' to={`/access/${cityContinente._id}`}>{cityContinente.name}</Linkrouter></li>
                                 </ul>
                              ))}
                           </>
                        </Accordion>

                     </div>

                  </div >
               ))}
            </>
         </div>

      </div >



   )
}

export default CardContinents;

{/* <div className='textCardContinents'>South America</div> */ }