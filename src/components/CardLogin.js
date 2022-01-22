import React from 'react';
import imgCompassLog from './img/imgNavbar/imgCompassLog.png';
import { Link as Linkrouter } from 'react-router-dom';


const CardLogin = () => {
    return (

        <div className="dropdown">

            <button data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" type="button"
                className="btn btn bg-transparent">
                <img src={imgCompassLog} width="40" height="40" alt="ícono de Logueo SignIn y SignUp" />
            </button>

            <div class="dropdown-menu">
                <form class="px-4 py-3">
                    <label className="texSign">Hello There!</label>
                    <div class="form-group">

                        <input type="email" class="form-control" id="exampleDropdownFormEmail1" required
                            placeholder="email@example.com" />
                    </div>
                    <div class="form-group">

                        <input type="password" class="form-control" id="exampleDropdownFormPassword1"
                            required placeholder="Password" />
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                        <label class="form-check-label" for="dropdownCheck">
                            Remember me
                        </label>
                    </div>

                    <button type="submit" class="btn btn-primary">Sign In</button>

                </form>

                <div class="dropdown-divider"></div>
                <Linkrouter class="dropdown-item" to="#">Forgot password?</Linkrouter>
                <Linkrouter class="dropdown-item" to="/cardLogup">New around here? Sign Up</Linkrouter>
                <div class="dropdown-divider"></div>

            </div>
        </div>



    )
}

export default CardLogin;