import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';
import GoogleLogin from 'react-google-login';
// import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';



const CardSignUp = () => {


    const responseGoogle = async (response) => {
        console.log(response);
        const NuevoUsuario = {
            firstName: response.profileObj.givenName,
            lastName: response.profileObj.familyName,
            email: response.profileObj.email,
            password: response.profileObj.googleId + "Ab",
            from: "Google",
        }
        await axios.post("https://myitinerary-claudiodmguzman.herokuapp.com/api/CardSignUp", { NuevoUsuario })
            .then(response =>
                displayMessages(response.data)
            )
        function displayMessages(data) {
            console.log(data)
            swal(data.message)
        }
    }


    const responseFacebook = async (response) => {
        console.log(response);
        const NuevoUsuario = {
            email: response.email,
            firstName: response.name,
            lastName: "facebook",
            password: response.id + "Ab",
            from: "Facebook",
        }
        await axios.post("https://myitinerary-claudiodmguzman.herokuapp.com/api/CardSignUp", { NuevoUsuario })
            .then(response =>
                displayMessages(response.data)
            )
        function displayMessages(data) {
            console.log(data)
            swal(data.message)
        }
    }


    async function NewUser(event) {
        event.preventDefault() // previene el comportamiento por defecto del botón submit, que es limpiar el formulario
        const NuevoUsuario = {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            from: "CardSignUp",
        }
        await axios.post("https://myitinerary-claudiodmguzman.herokuapp.com/api/CardSignUp", { NuevoUsuario })
            .then(response =>
                displayMessages(response.data)
            )
        function displayMessages(data) {
            console.log(data.validadorSignUp.error.details[0].message)
            swal(data.validadorSignUp.error.details[0].message)
        }

    }


    return (

        <div className='signUpInContainer'>

            <form className="signUpIn" onSubmit={NewUser}>

                <label className="texSign">Before using our services you need to create an account</label>

                <div className="form-group">
                    <input type="text" className="form-control formSign" id="exampleDropdownFormPassword1"
                        placeholder="First Name" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control formSign" id="exampleDropdownFormPassword2"
                        placeholder="Last Name" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control formSign" id="exampleDropdownFormEmail3"
                        placeholder="email@example.com" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control formSign" id="exampleDropdownFormPassword4"
                        placeholder="Password" />
                </div>

                {/* <div className="form-group">
                    <input type="password" className="form-control formSign" id="exampleDropdownFormPassword5"
                        placeholder="Repeat Password" />
                </div> */}

                <button type="submit" className="btn btn-success">SignUp With MyItinerary</button>

                <div className="externalLogin">
                    <GoogleLogin
                        clientId="165497680968-igja1qus1ipp2snlcl4vhg4vonm8ihat.apps.googleusercontent.com"
                        buttonText="Login With Google" // SIGN UP
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

export default CardSignUp;