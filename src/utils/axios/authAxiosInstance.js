import axios from "axios";
import { APP_URL, BASE_URL } from "../config";
import { getfromLocalstorage } from "../../services/helpers";

const authAxios=axios.create({
    baseURL: BASE_URL + APP_URL,
    headers:{
        'Accept': 'application/json, text/plain',
        'Content-Type':'application/json',

    }
})


// Add the interceptor
authAxios.interceptors.request.use(
    (config) => {
        const authToken = getfromLocalstorage('auth_token');
        if (authToken) {
            config.headers.Authorization = `Bearer ${authToken}`;
        }else {
            // If no token, reject the request
            throw new Error("Authentication required. Please log in.");
          }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default authAxios