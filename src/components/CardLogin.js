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

                <div class="dropdown-divider"></div>
                <Linkrouter class="dropdown-item" to="/cardSignIn">Sign In</Linkrouter>
                <Linkrouter class="dropdown-item" to="/cardSignUp">Sign Up</Linkrouter>
                <div class="dropdown-divider"></div>

            </div>
        </div>



    )
}

export default CardLogin;