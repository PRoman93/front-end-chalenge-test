import React, {useDebugValue} from "react";
import Register from "./Register";
import {useSelector} from "react-redux";
import {Redirect} from "react-router";
import {PROFILE, SIGN_IN} from "../../common/Constants";

const RegisterContainer = (props) => {

    const state = useSelector(state => state.register)
    return (
        <>
        {state.redirect && <Redirect to={SIGN_IN}/>}
        <Register/>
            </>
    )
}
export default RegisterContainer
