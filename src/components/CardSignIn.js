import React from 'react';


const CardSignIn = () => {
    return (

        <div className='signInContainer'>



            <form className="signUp">

                <label className="texSignUp">Hello There!</label>

                <div class="form-group">

                    <input type="email" class="form-control" id="exampleDropdownFormEmail1" required
                        placeholder="email@example.com" />
                </div>

                <div class="form-group">

                    <input type="password" class="form-control" id="exampleDropdownFormPassword1"
                        required placeholder="Password" />
                </div>

                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                    <label class="form-check-label" for="dropdownCheck">
                        Remember me
                    </label>
                </div>

                <button type="submit" class="btn btn-success">Sign In</button>

            </form>

            <div class="dropdown-divider"></div>
            <Linkrouter class="dropdown-item" to="#">Forgot password?</Linkrouter>
            <div class="dropdown-divider"></div>

        </div>



    )
}

export default CardSignIn;