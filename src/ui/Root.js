import React from "react";

const Root = (props) => {
    return (
        <>
            <HeaderContainer/>
            <div className={styles.wrapperOfAuth}>
                <Route path={SIGN_IN} render={() => <SignInContainer/>}/>
                <Route path={REGISTER} render={() => <RegisterContainer/>}/>
                <Route path={PROFILE} render={() => <Profile />}/>
            </div>
        </>
    )
}
export default Root
