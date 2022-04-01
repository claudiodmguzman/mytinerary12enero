import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { Accordion } from 'react-bootstrap-accordion';
import 'react-bootstrap-accordion/dist/index.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const CardContinents = () => {

   const [{ filterContynente }] = useStateValue()
   const [{ continentes, cities }, dispatch] = useStateValue()
   const [Cities, setCities] = useState([])
   const { id } = useParams()
   const continentesSelecter = continentes.filter(contynente => contynente._id === id)

   useEffect(() => {
      continentesSelecter.map(contynente =>
         axios.get(`http://localhost:4000/api/continentarios/${contynente.nameContinents}`)
            .then(response => setCities(response.data.response.continentario)
            )
      )
   }, [])








   console.log(cities)
   return (

      <div>

         < div className='ContinentsContainer' >
            <>
               {filterContynente.map((contynente) => (

                  <div className='cardContinentsContainer'>

                     <div className='imgCardContinent'>
                        <Linkrouter to="/CardTineraryAfrica"><img src={process.env.PUBLIC_URL + `/imgContinentesGlobo/${contynente.imageGlobo}`} alt="Imagen Globo del Continente" /></Linkrouter>
                     </div>

                     <div>

                        <Accordion title={contynente.nameContinents}>

                           <>

                              {cities?.map((city) =>

                                 city.continents.includes(contynente.nameContinents) &&
                                 <div ><Linkrouter className='item-Continent' to={`/access/${city._id}`}>{city.name}</Linkrouter></div>

                              )}

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