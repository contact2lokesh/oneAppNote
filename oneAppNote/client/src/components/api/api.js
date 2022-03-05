import request from "./request";

// login//
export const login = (data)=>{
   return request({
       url : '/users/login',
       method: "POST",
       data
   });
};

//Register//
export const register = (data)=>{
    return request({
        url : '/users',
        method: "POST",
        data
    });
 };