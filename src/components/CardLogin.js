import React from 'react';
import imgCompassLog from './img/imgNavbar/imgCompassLog.png';


const CardLogin = () => {
    return (


        <div className="dropdown">

            <button data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" type="button"
                className="btn btn bg-transparent">
                <img src={imgCompassLog} width="60" height="60" alt="ícono de Logueo SignIn y SignUp" />
            </button>

            <div class="dropdown-menu">

                <form class="px-4 py-3">
                    <label className="texSign">Hello There!</label>
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

                    <button type="submit" class="btn btn-primary">Sign In</button>

                </form>

                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Forgot password?</a>
                <div class="dropdown-divider"></div>

                <form class="px-4 py-3">

                    <label className="texSign">Before using our services you need to create an account</label>

                    <div class="form-group">

                        <input type="email" class="form-control" id="exampleDropdownFormEmail1"
                            required placeholder="email@example.com" />
                    </div>
                    <div class="form-group">

                        <input type="password" class="form-control" id="exampleDropdownFormPassword1"
                            required placeholder="Password" />
                    </div>
                    <div class="form-group">

                        <input type="password" class="form-control" id="exampleDropdownFormPassword1"
                            required placeholder="Repeat Password" />
                    </div>

                    <button type="submit" class="btn btn-success">Sign Up</button>

                </form>
            </div>
        </div>



    )
}

export default CardLogin;