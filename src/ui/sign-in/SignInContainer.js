import React, {useEffect} from "react";
import SignIn from "./SignIn";
import {getLoginData} from "../../bll/reducers/signInReducer";
import {connect, useSelector} from "react-redux";
import {Redirect} from "react-router";
import {PROFILE} from "../../common/Constants";

const SignInContainer = (props) => {

    const state = useSelector(state => state.signIn)
    console.log(props)
    useEffect(() => {
        props.getLoginData()
    }, [])
    return (
        <>
            {state.redirect && <Redirect to={PROFILE}/>}
            <SignIn/>
        </>

    )
}

export default connect(null, {getLoginData})(SignInContainer)
