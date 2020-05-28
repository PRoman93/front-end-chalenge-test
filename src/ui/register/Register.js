import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SetRegisterValue} from "../../bll/reducers/registerReducer";

const Register = (props) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeEmail = (e) => setEmail(e.currentTarget.value)
    const changePassword = (e) => setPassword(e.currentTarget.value)

    const sendRegisterSuccess = () => {
        dispatch(SetRegisterValue(email, password))
    }
    return (
        <div>
            <h2 title={'Register'}>Register page</h2>
            <div><input placeholder={'email'}
                        type={"email"}
                        onChange={changeEmail}/>
            </div>
            <div><input placeholder={'password'}
                        type={"password"}
                        onChange={changePassword}/>
            </div>
            <button onClick={sendRegisterSuccess}>Register</button>
        </div>
    )
}

export default Register
