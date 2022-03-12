import React from 'react';
import imgCompassLog from './img/imgNavbar/imgCompassLog.png';
import { Link as Linkrouter } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import axios from 'axios';
import { actionType } from '../reducer';


const CardLog = () => {

    const [{ user }, dispatch] = useStateValue()

    async function cerrarCesion() {
        const email = user.datosUser.email
        console.log(email)
        
        await axios.post("http://localhost:4000/api/signOut", { email })
            .then(response =>

                dispatch({
                    type: actionType.USER,
                    user: null
                })

            )

    }

    return (

        <div className="dropdown">

            <button data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" type="button"
                className="btn btn bg-transparent">
                <img src={imgCompassLog} width="40" height="40" alt="ícono de Logueo SignIn y SignUp" />
            </button>


            <div className="dropdown-menu dropdown-menu-right">

                {!user ?
                    <Linkrouter className="dropdown-item" to="/cardSignIn">Sign In</Linkrouter>
                    : <div className="dropdown-item" onClick={() => cerrarCesion()}><Linkrouter className="dropdown-item" to="/cardSignIn">Sign Out</Linkrouter></div>}

                <div className="dropdown-divider"></div>

                <Linkrouter className="dropdown-item" to="/cardSignUp">Sign Up</Linkrouter>


            </div>
        </div>



    )
}

export default CardLog;