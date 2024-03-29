

import axios from "axios";
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/userStore';
import { useApiStore } from "@/store/apiStore";

const authAxiosInstance = axios.create({
  baseURL:import.meta.env.VITE_MIRRORAR_API_URL + "/default/call/json/",
  headers: {
    "Accept": "application/json, text/plain",
    "Content-Type": "application/json",
  },
});


authAxiosInstance.interceptors.request.use(
  (config) => {

    const store = useUserStore()
    const apiStore = useApiStore();
    const { user } = storeToRefs(store)

    if (user.value.auth_token) {
      config.headers.Authorization = `Bearer ${user.value.auth_token}`;
    } else {
      apiStore.handleApiError("Authentication required. Please log in")
    }
    return config;
  },
  (error) => {
    apiStore.handleApiError("Authentication required. Please log in")
  }
);

export default authAxiosInstance;
