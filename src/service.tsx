import axios, { AxiosResponse } from "axios";
import environment from "./env"; 

const baseURL: string = environment.base_url; 
const headers: Record<string, string> = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
};

const postRequest = async (url: string, params:object, file: number = 0) => {
    if (file === 1) {
      headers["Content-Type"] = "multipart/form-data";
    } else {
      headers["Content-Type"] = "application/json";
    }
    const response: AxiosResponse = await axios.post(`${baseURL}/${url}`, params, {
      headers: headers,
    });
    return response.data;
};
const postRequest2 = async (url: string, params:object, file: number = 0) => {
  if (file === 1) {
    headers["Content-Type"] = "multipart/form-data";
  } else {
    headers["Content-Type"] = "application/json";
  }
  const response: AxiosResponse = await axios.post(`${environment.base_url2}${url}`, params, {
    headers: headers,
  });
  return response.data;
};

 const loginFun = async (loginDetails:unknown) => {
  const response = await axios.post(
    `${baseURL}/v1/login`,
    loginDetails,
    {
      headers: headers,
    },
    []
  );
  return response.data;
};

axios.interceptors.request.use(function (config) {
  const token = "Bearer ";
  if (localStorage.getItem("accessToken") !== null) {
    config.headers.Authorization = token + getToken();
  }

  config.headers["Type"] =
    localStorage.getItem("tokenType") !== null
      ? localStorage.getItem("tokenType")
      : "api";
  return config;
});



function getToken(){ 
  if(localStorage.getItem('accessToken') !== null){ 
  return localStorage.getItem('accessToken');
  }else{
    return null;  
  }
}

export {
    postRequest,
    loginFun,
    postRequest2
};