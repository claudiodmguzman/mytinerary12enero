import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';


const CardSignIn = () => {
    return (

        <div className='signUpInContainer'>



            <form className="signUpIn">

                <label className="texSign">Hello There!</label>

                <div className="form-group">

                    <input type="email" className="form-control formSign" id="exampleDropdownFormEmail1" required
                        placeholder="email@example.com" />
                </div>

                <div className="form-group">

                    <input type="password" className="form-control formSign" id="exampleDropdownFormPassword1"
                        required placeholder="Password" />
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input formSign" id="dropdownCheck" />
                    <label className="form-check-label" for="dropdownCheck">
                        Remember me
                    </label>
                </div>

                <button type="submit" className="btn btn-primary">Sign In</button>


                <div className="dropdown-divider"></div>
                <Linkrouter className="dropdown-item" to="#">Forgot password?</Linkrouter>
                <div className="dropdown-divider"></div>


            </form>



        </div>



    )
}

export default CardSignIn;