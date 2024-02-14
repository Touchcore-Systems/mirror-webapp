import { APP_URL, BASE_URL } from "../config";

import axios from "axios";
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/userStore';

const authAxiosInstance = axios.create({
  baseURL: BASE_URL + APP_URL,
  headers: {
    "Accept": "application/json, text/plain",
    "Content-Type": "application/json",
  },
});


authAxiosInstance.interceptors.request.use(
  (config) => {

    const store = useUserStore()
    const {  user } = storeToRefs(store)

    if (user.value.auth_token) {
    
      config.headers.Authorization = `Bearer ${user.value.auth_token}`;
     
    } else {
      throw new Error("Authentication required. Please log in.");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default authAxiosInstance;
