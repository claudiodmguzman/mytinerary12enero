import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';
import GoogleLogin from 'react-google-login';



const CardSignUp = () => {

    const responseGoogle = async (response) => {
        console.log(response);
    }

    const googleUser = {
        // firstName: response.profileObj.givenName,
        // lastName: response.profileObj.familyName,
        // email: response.profileObj.email,
        // password: response.googleId+"Ab",
        google: true,
    }



    async function NewUser(event) {
        event.preventDefault() // previene el comportamiento por defecto del botón submit, que es limpiar el formulario
        const NuevoUsuario = {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            google: true
        }


        await axios.post("http://localhost:4000/api/cardSignUp", { NuevoUsuario })
            .then(response =>

                displayMessages(response.data)

            )

        function displayMessages(data) {
            if (data.success = "false") {
                console.log(data.response.error.details)
                data.response.error.details.map(error => swal(error.message))
            }
            else if (data.success = "false") {
                console.log(swal(data.response))
            }
            else if (data.success = "false") {
                console.log(swal(data.response))
            }
            else if (data.success = "true") {
                console.log(swal(data.response))
            }
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

                    <input type="text" className="form-control formSign" id="exampleDropdownFormPassword1"
                        placeholder="Last Name" />
                </div>

                <div className="form-group">

                    <input type="text" className="form-control formSign" id="exampleDropdownFormEmail1"
                        placeholder="email@example.com" />
                </div>
                <div className="form-group">

                    <input type="password" className="form-control formSign" id="exampleDropdownFormPassword1"
                        placeholder="Password" />
                </div>
                <div className="form-group">

                    <input type="password" className="form-control formSign" id="exampleDropdownFormPassword1"
                        placeholder="Repeat Password" />
                </div>

                <button type="submit" className="btn btn-success">Sign Up</button>

                <div className="externalLogin">
                    <GoogleLogin
                        clientId="165497680968-igja1qus1ipp2snlcl4vhg4vonm8ihat.apps.googleusercontent.com"
                        buttonText="Sign Up with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </form>
        </div>



    )
}

export default CardSignUp;