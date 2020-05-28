import React from "react";
import {PROFILE, REGISTER, SIGN_IN} from "../common/Constants";
import HeaderContainer from "./HeaderContainer";
import Profile from "./profile/Profile";
import RegisterContainer from "./register/RegisterContainer";
import SignInContainer from "./sign-in/SignInContainer";
import {Route} from "react-router-dom";

const Root = (props) => {
    return (
        <>
            <HeaderContainer/>
            <div>
                <Route path={SIGN_IN} render={() => <SignInContainer/>}/>
                <Route path={REGISTER} render={() => <RegisterContainer/>}/>
                <Route path={PROFILE} render={() => <Profile />}/>
            </div>
        </>
    )
}
export default Root
