import axios from "axios";

const client = axios.create({
    baseURL : "http://localhost:5000/api",
    headers: {
        "Content-Type" : "application/json",
        Accept: "application/json",
    },
});

const request = (options)=>{
    // console.log(options);
    const onFulfilment = (res)=>{
        return res.data;
    };

    const onRejection = (error)=>{
        if(error.response){
            if(error.response.status === 401){
                console.log(error);
            }
            if(error.response.status === 403){
                console.log(error);
            }
            else if(error.request){
             console.log(error);
            } else{
                console.log(error);
            }
        }
        return Promise.reject(error.response || error.message);
    };
     // calling
    return client(options).then(onFulfilment).catch(onRejection);
}

export default request;