import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import imgCompass from './img/imgNavbar/imgCompass.png';
import CardLogin from './CardLogin';


const Navbar = () => {
    return (
        <div>

            <div className="noch">
                <div className="encabezadoImgLogo">
                    <Linkrouter to="/"><img src={imgCompass} height="175" width="175" alt="Logo principal, lleva a la Home page" /></Linkrouter>
                </div>

                <div className="encabezadoNoch">
                    <div className="encabezado">
                        <div className="encabezadoLinksGroup">
                            <nav className="encabezadoLinks">
                                <Linkrouter className="linkDeco" to="/cities">Cities</Linkrouter>
                            </nav>


                            {/* <nav className="encabezadoLinks">
                                <Linkrouter className="linkDeco" to="/continents">Continents</Linkrouter>
                            </nav> */}
                        </div>
                    </div>
                </div>


                <div className="logueo">
                    <div>
                        <CardLogin />
                    </div>
                </div>

                
            </div>


            <div className="titulo">
                <p>MYTinerary</p>
            </div>

        </div>
    )
}

export default Navbar;