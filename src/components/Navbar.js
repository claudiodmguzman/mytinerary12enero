import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import imgCompass from './img/imgNavbar/imgCompass.png';
import CardLog from './CardLog';


const Navbar = () => {
    return (
        <div className='navbarContainer'>

            <div className='nochtitulo'>

                <div className="noch">
                    <div className="encabezadoImgLogo">
                        <Linkrouter to="/"><img src={imgCompass} className="App-logo" height="175" width="175" alt="Logo principal, lleva a la Home page" /></Linkrouter>
                    </div>

                    <div className="encabezadoNoch">
                        <div className="smile"></div>
                    </div>

                </div>


                <div className="titulo">
                    <p>MYTinerary</p>
                </div>

            </div>

            <div>
                <nav className="encabezadoLinks">
                    <Linkrouter className="linkDeco" to="/cities">Cities</Linkrouter>
                </nav>


                <nav className="encabezadoLinks">
                    <Linkrouter className="linkDeco" to="/">Home</Linkrouter>
                </nav>

                <div>
                    <CardLog />
                </div>
            </div>

        </div>
    )
}

export default Navbar;