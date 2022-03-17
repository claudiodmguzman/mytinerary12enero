import axios from 'axios';
import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import swal from 'sweetalert';
import { actionType } from '../reducer';
import { useStateValue } from '../StateProvider';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';


const CardSignIn = () => {

    const [{ user }, dispatch] = useStateValue()

    const responseGoogle = async (response) => {
        console.log(response);

        const userData = {
            email: response.profileObj.email,
            password: response.profileObj.googleId + "Ab",
        }

        await axios.post("http://localhost:4000/api/signIn", { userData })
            .then(response =>

                displayMessages(response.data),
            )

        function displayMessages(data) {
            if (!data.success) {
                console.log(swal(data.error))
            }
            else { console.log(data.response) }
            //else { console.log(swal(data.response)) }

            dispatch({
                type: actionType.USER,
                user: data.response
            })

        }
    }

    const responseFacebook = async (response) => {
        console.log(response);

        const userData = {
            email: response.email,
            password: response.id + "Ab",
        }

        await axios.post("http://localhost:4000/api/signIn", { userData })
            .then(response =>

                displayMessages(response.data),
            )

        function displayMessages(data) {
            if (!data.success) {
                console.log(swal(data.error))
            }
            else { console.log(data.response) }
            //else { console.log(swal(data.response)) }

            dispatch({
                type: actionType.USER,
                user: data.response
            })

        }
    }

    async function loginUser(event) {
        event.preventDefault() // previene el comportamiento por defecto del botón submit, que es limpiar el formulario
        const userData = {
            email: event.target[0].value,
            password: event.target[1].value,
        }


        await axios.post("http://localhost:4000/api/signIn", { userData})
            .then(response =>

                displayMessages(response.data),
            )

        function displayMessages(data) {
            if (!data.success) {
                console.log(swal(data.error))
            }
            //else { console.log(data.response) }
            else { console.log(swal(data.response)) }

            dispatch({
                type: actionType.USER,
                user: data.response

            })

        }
        console.log(user)
    }

    return (

        <div className='signUpInContainer'>

            <form className="signUpIn" onSubmit={loginUser}>

                <label className="texSign">Hello There!</label>

                <div className="form-group">

                    <input type="email" className="form-control formSign" id="exampleDropdownFormEmail6"
                        placeholder="email@example.com" />
                </div>

                <div className="form-group">

                    <input type="password" className="form-control formSign" id="exampleDropdownFormPassword7"
                        placeholder="Password" />
                </div>

                <div className="form-check">
                    {/* <input type="checkbox" className="form-check-input formSign" id="dropdownCheck" /> */}
                    {/* <label className="form-check-label" htmlFor="dropdownCheck">
                        Remember me
                    </label> */}
                </div>

                <button type="submit" className="btn btn-primary">Sign In</button>

                {/* <div className="dropdown-divider"></div> */}
                {/* <Linkrouter className="dropdown-item" to="#">Forgot password?</Linkrouter> */}
                {/* <div className="dropdown-divider"></div> */}

                <div className="externalLogin">
                    <GoogleLogin
                        clientId="165497680968-igja1qus1ipp2snlcl4vhg4vonm8ihat.apps.googleusercontent.com"
                        buttonText="Sign In with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>

                <div className="externalLogin">
                    <FacebookLogin
                        appId="280004064145534"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook} />
                </div>

            </form>

        </div>

    )
}

export default CardSignIn;