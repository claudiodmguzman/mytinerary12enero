import React from 'react';
import { Link as Linkrouter } from 'react-router-dom';


const CardSignIn = () => {
    return (

        <div className='signUpInContainer'>



            <form className="signUpIn">

                <label className="texSign">Hello There!</label>

                <div class="form-group">

                    <input type="email" class="form-control formSign" id="exampleDropdownFormEmail1" required
                        placeholder="email@example.com" />
                </div>

                <div class="form-group">

                    <input type="password" class="form-control formSign" id="exampleDropdownFormPassword1"
                        required placeholder="Password" />
                </div>

                <div class="form-check">
                    <input type="checkbox" class="form-check-input formSign" id="dropdownCheck" />
                    <label class="form-check-label" for="dropdownCheck">
                        Remember me
                    </label>
                </div>

                <button type="submit" class="btn btn-primary">Sign In</button>


                <div class="dropdown-divider"></div>
                <Linkrouter class="dropdown-item" to="#">Forgot password?</Linkrouter>
                <div class="dropdown-divider"></div>


            </form>



        </div>



    )
}

export default CardSignIn;