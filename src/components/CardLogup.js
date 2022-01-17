import React from 'react';


const CardLogup = () => {
    return (

        <div className='signUpContainer'>

            

                <form className="signUp">

                    <label className="texSignUp">Before using our services you need to create an account</label>

                    <div class="form-group">

                        <input type="email" class="form-control formSignup" id="exampleDropdownFormEmail1"
                            required placeholder="email@example.com" />
                    </div>
                    <div class="form-group">

                        <input type="password" class="form-control formSignup" id="exampleDropdownFormPassword1"
                            required placeholder="Password" />
                    </div>
                    <div class="form-group">

                        <input type="password" class="form-control formSignup" id="exampleDropdownFormPassword1"
                            required placeholder="Repeat Password" />
                    </div>

                    <button type="submit" class="btn btn-success">Sign Up</button>

                </form>
            </div>
       


    )
}

export default CardLogup;