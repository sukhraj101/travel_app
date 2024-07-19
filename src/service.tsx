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

export {
    postRequest
};