import {REGISTER_SUCCESS, SET_ERROR_REGISTER_PAGE, WAITING_FOR_RESPONSE} from "../../common/Constants";
import {authApi} from "../../dal/api";

const initialState = {
    email: '',
    password: '',
    loading: false,
    redirect: false
}
const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                email: action.email,
                password: action.password,
                redirect: action.redirect,
            }

        case SET_ERROR_REGISTER_PAGE:
            return {
                ...state,
                error: action.error
            }
        case WAITING_FOR_RESPONSE:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state
    }

}
export default registerReducer


export const SetRegisterValue = (email, password) => async (dispatch) => {

    let correctEmail =  /^[a-z0-9_%+-]{1,}([.]|)[a-z0-9_%+-]{1,}@([a-z0-9_%+-]{2,}[.]{1}[a-z0-9_%+-]{2,}([.]{1}[a-z0-9_%+-]{2,})?)$/i
    console.log(email.match(correctEmail))
    if (password.length <= 7 || !email.match(correctEmail)) {
        let error = 'your email of password is not valid'
        // dispatch({type: SET_ERROR_REGISTER_PAGE, error})
        alert(error)
    } else {
        dispatch({type: WAITING_FOR_RESPONSE, loading: true})
        try {
            let result = await authApi.register(email, password)
            dispatch({type: REGISTER_SUCCESS, email, password, redirect: true})
            dispatch({type: WAITING_FOR_RESPONSE, loading: false})
        } catch (e) {
            alert('some error')
        }

    }
}

