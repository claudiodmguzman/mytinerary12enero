import axios from 'axios';
import React from 'react';


const CardSignUp = () => {

    async function NewUser (event) {
        console.log(event)

        await axios.post ("http://localhost:4000/api/signup")
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