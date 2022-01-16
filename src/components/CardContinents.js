import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import img1 from './img/imgContinentes/img1-America-del-Sur.png';
import img2 from './img/imgContinentes/img2-America-del-Norte.png';
import img3 from './img/imgContinentes/img3-Africa.png';
import img4 from './img/imgContinentes/img4-Asia.png';
import img5 from './img/imgContinentes/img5-Europa.png';
import img6 from './img/imgContinentes/img6-Oceania.png';
import { Accordion } from 'react-bootstrap-accordion'
import 'react-bootstrap-accordion/dist/index.css'



const Continents = () => {
    return (


        <div>
            <h1 className="cardMasterTitulo">Continents</h1>

            <div className='ContinentsContainer'>

                <div className='cardContinentsContainer'>

                    <div className='imgCardContinent'>
                        <img src={img1} alt="Imagen de America del Sur" />
                    </div>

                    <Accordion title='South America'>
                        <ul className='cardUlContinent'>
                            <li><Linkrouter className='item-Continent' to="/access">City1</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City2</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City3</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City4</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City5</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City6</Linkrouter></li>
                        </ul>
                    </Accordion>

                </div >

                <div className='cardContinentsContainer'>

                    <div className='imgCardContinent'>
                        <img src={img2} alt="Imagen de America del Norte" />
                    </div>

                    <Accordion title='North America'>
                        <ul className='cardUlContinent'>
                            <li><Linkrouter className='item-Continent' to="/access">City1</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City2</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City3</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City4</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City5</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City6</Linkrouter></li>
                        </ul>
                    </Accordion>

                </div >

                <div className='cardContinentsContainer'>

                    <div className='imgCardContinent'>
                        <img src={img3} alt="Imagen de Africa" />
                    </div>

                    <Accordion title='Africa'>
                        <ul className='cardUlContinent'>
                            <li><Linkrouter className='item-Continent' to="/access">City1</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City2</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City3</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City4</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City5</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City6</Linkrouter></li>
                        </ul>
                    </Accordion>

                </div >

                <div className='cardContinentsContainer'>

                    <div className='imgCardContinent'>
                        <img src={img4} alt="Imagen de Asia" />
                    </div>

                    <Accordion title='Asia'>
                        <ul className='cardUlContinent'>
                            <li><Linkrouter className='item-Continent' to="/access">City1</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City2</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City3</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City4</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City5</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City6</Linkrouter></li>
                        </ul>
                    </Accordion>

                </div >

                <div className='cardContinentsContainer'>

                    <div className='imgCardContinent'>
                        <img src={img5} alt="Imagen de Europa" />
                    </div>

                    <Accordion title='Europe'>
                        <ul className='cardUlContinent'>
                            <li><Linkrouter className='item-Continent' to="/access">City1</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City2</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City3</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City4</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City5</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City6</Linkrouter></li>
                        </ul>
                    </Accordion>

                </div >

                <div className='cardContinentsContainer'>

                    <div className='imgCardContinent'>
                        <img src={img6} alt="Imagen de Oceania" />
                    </div>

                    <Accordion title='Oceania'>
                        <ul className='cardUlContinent'>
                            <li><Linkrouter className='item-Continent' to="/access">City1</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City2</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City3</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City4</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City5</Linkrouter></li>
                            <li><Linkrouter className='item-Continent' to="/access">City6</Linkrouter></li>
                        </ul>
                    </Accordion>

                </div >


            </div>
        </div>

    )
}

export default Continents;

{/* <div className='textCardContinents'>South America</div> */ }