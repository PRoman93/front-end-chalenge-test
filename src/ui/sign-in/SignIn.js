import React from "react";

const SignIn = (props) => {
    return (
        <div >
            <h2 title={'sign-in'}></h2>
            <div><input type="text"
                        placeholder='email'
            /></div>
            <div><input type="password"
                        placeholder='password'
            /></div>
            <div><button>Sign In</button></div>
        </div>
    )
}
export default SignIn
