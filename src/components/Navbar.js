import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import imgCompass from './imgCompass.png';
import imgCompassLog from './imgCompassLog.png';

const Navbar = () => {
    return (
        <div>

            <div className="noch">
                <div className="encabezadoImgLogo">
                    <Linkrouter to="/"><img src={imgCompass} height="175" width="175" alt="logo" /></Linkrouter>
                </div>

                <div className="encabezadoNoch">
                    <div className="encabezado">
                        <div className="encabezadoLinksGroup">
                            <nav className="encabezadoLinks">
                                <Linkrouter className="linkDeco" to="/cities">Cities</Linkrouter>
                            </nav>
                            <div className="selector">
                            </div>
                            <nav className="encabezadoLinks">
                                <Linkrouter className="linkDeco" to="/country">Country</Linkrouter>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="logueo">
                    <div className="dropdown">

                        <button data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" type="button"
                            className="btn btn bg-transparent">
                            <img src={imgCompassLog} width="60" height="60" alt="iconlogueo" />
                        </button>

                        <div class="dropdown-menu">

                            <form class="px-4 py-3">
                                <label className="texSign">Hello There!</label>
                                <div class="form-group">

                                    <input type="email" class="form-control" id="exampleDropdownFormEmail1"
                                        placeholder="email@example.com"/>
                                </div>
                                <div class="form-group">

                                    <input type="password" class="form-control" id="exampleDropdownFormPassword1"
                                        placeholder="Password"/>
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
                                        <label class="form-check-label" for="dropdownCheck">
                                            Remember me
                                        </label>
                                </div>

                                <button type="submit" class="btn btn-primary">Sign In</button>

                            </form>

                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Forgot password?</a>
                            <div class="dropdown-divider"></div>

                            <form class="px-4 py-3">

                                <label className="texSign">Before using our services you need to create an account</label>

                                <div class="form-group">

                                    <input type="email" class="form-control" id="exampleDropdownFormEmail1"
                                        placeholder="email@example.com"/>
                                </div>
                                <div class="form-group">

                                    <input type="password" class="form-control" id="exampleDropdownFormPassword1"
                                        placeholder="Password"/>
                                </div>
                                <div class="form-group">

                                    <input type="password" class="form-control" id="exampleDropdownFormPassword1"
                                        placeholder="Repeat Password"/>
                                </div>

                                <button type="submit" class="btn btn-success">Sign Up</button>

                            </form>
                        </div>
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