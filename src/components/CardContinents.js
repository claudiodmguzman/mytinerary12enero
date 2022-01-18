import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import img1 from './img/imgContinentes/img1-America-del-Sur.png';
import img2 from './img/imgContinentes/img2-America-del-Norte.png';
import img3 from './img/imgContinentes/img3-Africa.png';
import img4 from './img/imgContinentes/img4-Asia.png';
import img5 from './img/imgContinentes/img5-Europa.png';
import img6 from './img/imgContinentes/img6-Oceania.png';
import { Accordion } from 'react-bootstrap-accordion';
import 'react-bootstrap-accordion/dist/index.css';



const CardContinents = () => {
    return (


        <div>
            <h1 className="cardMasterTitulo">Continents</h1>

            <div className='ContinentsContainer'>

                <div className='cardContinentsContainer'>

                    <div className='imgCardContinent'>
                    <Linkrouter to="/cardTinerarySouthAmerica"><img src={img1} alt="Imagen de America del Sur" /></Linkrouter>
                    </div>

                    <Accordion title='South America'>
                        <ul className='cardUlContinent'>
                            <li><Linkrouter className='item-Continent' to="/access">Buenos Aires</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Cartajena de Indias</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Cuzco</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">La Paz</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Rio de Janeiro</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Santiago de Chile</Linkrouter></li>
                        </ul>
                    </Accordion>

                </div >

                <div className='cardContinentsContainer'>

                    <div className='imgCardContinent'>
                    <Linkrouter to="/cardTineraryNorthAmerica"><img src={img2} alt="Imagen de America del Norte" /></Linkrouter>
                    </div>

                    <Accordion title='North America'>
                        <ul className='cardUlContinent'>
                            <li><Linkrouter className='item-Continent' to="/access">Anchorage</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Chicago</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Guadalajara</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Mexico City</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Vancouver</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Victoria</Linkrouter></li>
                        </ul>
                    </Accordion>

                </div >

                <div className='cardContinentsContainer'>

                    <div className='imgCardContinent'>
                    <Linkrouter to="/cardTineraryAfrica"><img src={img3} alt="Imagen de Africa" /></Linkrouter>
                    </div>

                    <Accordion title='Africa'>
                        <ul className='cardUlContinent'>
                            <li><Linkrouter className='item-Continent' to="/access">Cairo</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Cape Town</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Dar es Salaam</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Essaouira</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Luanda</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Nairobi</Linkrouter></li>
                        </ul>
                    </Accordion>

                </div >

                <div className='cardContinentsContainer'>

                    <div className='imgCardContinent'>
                    <Linkrouter to="/cardTineraryAsia"><img src={img4} alt="Imagen de Asia" /></Linkrouter>
                    </div>

                    <Accordion title='Asia'>
                        <ul className='cardUlContinent'>
                            <li><Linkrouter className='item-Continent' to="/access">Dubai</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Omsk</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Seoul</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Singapore</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Taipei</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Tokyo</Linkrouter></li>
                        </ul>
                    </Accordion>

                </div >

                <div className='cardContinentsContainer'>

                    <div className='imgCardContinent'>
                    <Linkrouter to="/cardTineraryEurope"><img src={img5} alt="Imagen de Europa" /></Linkrouter>
                    </div>

                    <Accordion title='Europe'>
                        <ul className='cardUlContinent'>
                            <li><Linkrouter className='item-Continent' to="/access">Amsterdam</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Athens</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Barcelona</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Istanbul</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Paris</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Prague</Linkrouter></li>
                        </ul>
                    </Accordion>

                </div >

                <div className='cardContinents'>

                    <div className='imgCardContinent'>
                    <Linkrouter to="/cardTineraryOceania"><img src={img6} alt="Imagen de Oceania" /></Linkrouter>
                    </div>

                    <Accordion title='Oceania'>
                        <ul className='cardUlContinent'>
                            <li><Linkrouter className='item-Continent' to="/access">Auckland</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Brisbane</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Gold Coast</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Melbourne</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Perth</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">Port Vila</Linkrouter></li>
                        </ul>
                    </Accordion>

                </div >
                
            </div>


        </div>

    )
}

export default CardContinents;

{/* <div className='textCardContinents'>South America</div> */ }