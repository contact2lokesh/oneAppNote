import { 
GET_LOGIN_PENDING,
GET_LOGIN_SUCCESS,
GET_LOGIN_ERROR ,
GET_REGISTER_PENDING,
GET_REGISTER_SUCCESS,
GET_REGISTER_ERROR,
} from "../reducers/type";

import {login, register} from  "../../components/api/api"

export const getLogin = (data)=>{
  return async(dispatch)=>{
    dispatch({type: GET_LOGIN_PENDING, loading: true});
    try{
        const loginResult = await login(data);
        localStorage.setItem("loginInfo", JSON.stringify(loginResult));
      return dispatch({
        type: GET_LOGIN_SUCCESS,
        payload: loginResult,
      });
    } catch(error){
        dispatch({
          type: GET_LOGIN_ERROR,
          payload: error.data && error.response.data.message ?  error.response.data.message : error.response.message,

        })
    }
  }
}

export const getRegister = (data)=>{
   return async(dispatch)=>{
    dispatch({type: GET_REGISTER_PENDING, loading: true});
    try {
      const registerResult = await register(data);
      return dispatch({type: GET_REGISTER_SUCCESS, loading: false, payload: registerResult});
    } catch (error) {
      dispatch({
        type: GET_REGISTER_ERROR,
        payload: error.data && error.response.data.message ?  error.response.data.message : error.response.message,
      })
    }
   }
}