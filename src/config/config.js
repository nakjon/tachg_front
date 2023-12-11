import axios from "axios";
import toastMessage from "src/common/toastmessage/toastmessage";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_END_POINT,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "content-type": "application/json",
    Accept: "application/json",
  },
  timeout: 20000,
});

// export default configModal

API.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem("DVDMS_KEEP_SECRET");
    config.headers = {
      Authorization:`Bearer ${token}`,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
API.interceptors.response.use(

  function (response) {
    return response;
  },
  async (err) => {

    console.log("statuscode:", err);
    
    if (err.response) {

      //sessionStorage.clear("DVDMS_KEEP_SECRET");

      if (err.response.status === 403 && err.response.data) {
       //###########
        toastMessage('Access denied' , 'token expired !login again ' , 'error')
        setTimeout(() => {
          window.location.href = '/jwterror'
        }, 2500);
        //########
        return Promise.reject(err.response.data); 
      }
      if (err.response.status === 401 && err.response.data) {
        // setTimeout(() => {
        //   window.location.href = '/jwterror'
        // }, 2500);
        toastMessage('Bad Request' , err.response?.data?.message , 'error')
        console.log('aaaa',err.response.data)
        return Promise.reject(err.response.data);
      }
      if (err.response.status === 400 && err.response.data) {
        toastMessage('Bad Request' , err.response?.data?.message , 'error')
        return Promise.reject(err.response.data);
      }
    }else {
       if (err.code === 'ECONNABORTED') {
        // Request timeout error
        toastMessage('SERVER PROBLEM' ,"Server is not responding" ,'error')
        // return Promise.reject({ message: 'Request timed out.' });
      }else if (err.code === 'ERR_NETWORK') {
        // Request timeout error
        toastMessage('NETWORK ERROR' ,"Could not react the server" ,'error')
        // return Promise.reject({ message: 'Request timed out.' });
      }  else {
        toastMessage('Server problem' ,"An error occurred" ,'error')
        //return Promise.reject({ message: 'An unknown error occurred.' });
      }
    }
    return Promise.reject(err);
  }
);
export default API;



