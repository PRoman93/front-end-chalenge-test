import React from "react";
import {PROFILE, REGISTER, SIGN_IN} from "../common/Constants";
import {Link, NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            <NavLink to={SIGN_IN}>Sign In</NavLink>
            <NavLink to={REGISTER} wordOfLink={'register'}>Register</NavLink>
            <NavLink to={PROFILE} wordOfLink={'profile'}>Profile</NavLink>
        </div>
    )
}
export default Header
