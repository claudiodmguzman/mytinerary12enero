import React, { Component } from 'react';
import { useStateValue } from '../StateProvider';
import { Accordion } from 'react-bootstrap-accordion';
import 'react-bootstrap-accordion/dist/index.css';
import { useParams } from 'react-router-dom';

const Access = () => {

    const [{ cities }, dispatch] = useStateValue()

    const { id } = useParams()
    const citiesSelecter = cities.filter(cities._id === id)

    console.log(citiesSelecter)

    return (

                <div className="accessContainer">

                    <div className='access' >


                        <div className="accessFondo">{cities.name}</div>

                        <div className="accessFondo">{cities.country}</div>

                        <div className="accessFondo">{cities.currency}</div>

                        <div className="accessFondo">{cities.language}</div>

                        <div className="accessFondo">{cities.demonym}</div>

                        <div className="accessFondo">{cities.timezone}</div>

                        <div className="accessFondo">{cities.population}</div>

                        <div className="accessImage">
                            <img className="d-block w-100 accessImage" src={process.env.PUBLIC_URL + `/imgCiudades/${cities.image}`} height="600" alt="img6City-Republica-Checa-Praga.jpg" />
                        </div>


                        <div className="accessFondo accessdet">{cities.textShort}</div>

                        <div className="accessDetail" >
                            <Accordion title='Expand Detail'>
                                <p className='paccessDetail' >{cities.description}</p></Accordion>
                        </div>

                        <div className="accessFondo">{cities.coordinates}</div>

                        <div className="accessFondo">{cities.googlemaps}</div>
                        
                        <div className="accessFondo">{cities.continents}</div>

                        <div className="accessFondo">{cities.region}</div>


                        <div className='accessCommLik' >

                            <div className="accessFondo">User comments</div>

                            <div className="accessFondo">Likes</div>

                        </div>

                    </div>
                </div>
        
    )
}

export default Access;