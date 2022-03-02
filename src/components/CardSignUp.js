import axios from 'axios';
import React from 'react';


const CardSignUp = () => {

    async function NewUser (event) {
        event.preventDefault() // previene el comportamiento por defecto del botón submit, que es limpiar el formulario
        const NuevoUsuario = {firstName:event.target[0].value,
                            lastName:event.target[1].value,
                            email:event.target[2].value,
                            password:event.target[3].value}
    

        await axios.post ("http://localhost:4000/api/signup",{NuevoUsuario})
        .then(response => alert(response.data.response))
    }

    return (

        <div className='signUpInContainer'>



            <form className="signUpIn" onSubmit={NewUser}>

                <label className="texSign">Before using our services you need to create an account</label>

                <div className="form-group">

                    <input type="text" className="form-control formSign" id="exampleDropdownFormPassword1"
                        required placeholder="First Name" />
                </div>

                <div className="form-group">

                    <input type="text" className="form-control formSign" id="exampleDropdownFormPassword1"
                        required placeholder="Last Name" />
                </div>

                <div className="form-group">

                    <input type="email" className="form-control formSign" id="exampleDropdownFormEmail1"
                        required placeholder="email@example.com" />
                </div>
                <div className="form-group">

                    <input type="password" className="form-control formSign" id="exampleDropdownFormPassword1"
                        required placeholder="Password" />
                </div>
                <div className="form-group">

                    <input type="password" className="form-control formSign" id="exampleDropdownFormPassword1"
                        required placeholder="Repeat Password" />
                </div>

                <button type="submit" className="btn btn-success">Sign Up</button>

            </form>
        </div>



    )
}

export default CardSignUp;