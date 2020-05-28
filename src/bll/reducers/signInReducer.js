import {authApi} from "../../dal/api";
import {LOGIN_SUCCESS} from "../../common/Constants";

const initialState = {}

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET-LOGIN-DATA':
            debugger
            return {
                ...state,
                data:action.data
            }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                email: action.email,
                password: action.password,
                redirect: action.redirect
            }
        }
    }
    return state
}
export default signInReducer

export const getLoginData = (email,password) => async (dispatch) => {
    await authApi.login(email,password)
    try {
        dispatch({type: 'GET-LOGIN-DATA', email, password})
    } catch {
        alert('some error')
    }
}
// export const LoginSuccess = (email, password) => async (dispatch) => {
//
//     let correctEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
//     if (password.length <= 7 && email !== correctEmail) {
//         let error = 'your email of password is not valid'
//         // dispatch({type: SET_ERROR_REGISTER_PAGE, error})
//         alert(error)
//     } else {
//         dispatch({type: WAITING_FOR_RESPONSE, loading: true})
//         try {
//             let result = await authApi.register(email, password)
//             dispatch({type: LOGIN_SUCCESS, email, password, redirect: true})
//             dispatch({type: WAITING_FOR_RESPONSE, loading: false})
//         } catch (e) {
//             alert('some error')
//         }
//
//     }
// }
