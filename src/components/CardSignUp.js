import React from 'react';


const CardSignUp = () => {
    return (

        <div className='signUpInContainer'>

            

                <form className="signUpIn">

                    <label className="texSign">Before using our services you need to create an account</label>

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