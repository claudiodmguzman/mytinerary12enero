import axios from 'axios';
import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';
import swal from 'sweetalert';
import { actionType } from '../reducer';
import { useStateValue } from '../StateProvider';


const CardSignIn = () => {

    const [{ user }, dispatch] = useStateValue()

    async function loginUser(event) {
        event.preventDefault() // previene el comportamiento por defecto del botón submit, que es limpiar el formulario
        const userData = {
            email: event.target[0].value,
            password: event.target[1].value,
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
        console.log(user)
    }

    return (

        <div className='signUpInContainer'>



            <form className="signUpIn" onSubmit={loginUser}>

                <label className="texSign">Hello There!</label>

                <div className="form-group">

                    <input type="email" className="form-control formSign" id="exampleDropdownFormEmail1" required
                        placeholder="email@example.com" />
                </div>

                <div className="form-group">

                    <input type="password" className="form-control formSign" id="exampleDropdownFormPassword1"
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


            </form>



        </div>



    )
}

export default CardSignIn;