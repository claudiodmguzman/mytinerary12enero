import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { Accordion } from 'react-bootstrap-accordion';
import 'react-bootstrap-accordion/dist/index.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import img1 from './img/imgContinentes/img1-America-del-Sur.png';
import img2 from './img/imgContinentes/img2-America-del-Norte.png';
import img3 from './img/imgContinentes/img3-Africa.png';
import img4 from './img/imgContinentes/img4-Asia.png';
import img5 from './img/imgContinentes/img5-Europa.png';
import img6 from './img/imgContinentes/img6-Oceania.png';



const CardContinents = () => {

  const [{ filterCity }, dispatch] = useStateValue()

  //const [{ filterCity }, { filterContinent }, dispatch] = useStateValue()
  //const [itineraries, setCities] = useState([])
  //const [{ cities }, dispatch] = useStateValue()

  // const [continenties, setCities] = useState([])
  // const [{ cities }] = useStateValue()
  // const { id } = useParams()
  // const continentSelecter = cities.filter(continents => continents._id === id)

  // useEffect(() => {
  //   continentSelecter.map(continents =>
  //     axios.get(`http://localhost:4000/api/datos/${continents.name}`)
  //       .then(response => setCities(response.data.response.cityCont)
  //       )
  //   )
  // }, [])

  return (


    <div>
      {/* <h1 className="cardMasterTitulo">Continents</h1> */}

      <div className='ContinentsContainer'>

        <div className='cardContinentsContainer'>

          <div className='imgCardContinent'>
            <Linkrouter to="/cardTineraryAfrica"><img src={img1} alt="imagen del continente en forma de globo terraqueo" /></Linkrouter>
            {/* <Linkrouter className='item-Continent' to={`/access/${continents._id}`}><img className="accessImage" src={process.env.PUBLIC_URL + `/imgContinentesGlobo/${city.imageGlobo}`} alt="image of city" /></Linkrouter> */}
          </div>

          <Accordion title="{nameContinent}">

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


  )
}

export default CardContinents;

{/* <div className='textCardContinents'>South America</div> */ }