import { combineReducers } from "redux";
import { loginReducer, registerReducer } from "./authReducers";

export const rootReducer = combineReducers({
    loginReducer, registerReducer,
});