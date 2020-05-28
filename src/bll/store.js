import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import registerReducer from "./reducers/registerReducer";
import signInReducer from "./reducers/signInReducer";
import profileReducer from "./reducers/profileReducer";

const rootReducer = combineReducers({
    register: registerReducer,
    signIn: signInReducer,
    profile: profileReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// window.store = store;

export default store

