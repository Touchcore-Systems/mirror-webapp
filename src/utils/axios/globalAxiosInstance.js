import axios from "axios";
import { APP_URL, BASE_URL } from "../config";



 const globalAxios=axios.create({
    baseURL: BASE_URL + APP_URL,
    headers:{
        'Accept': 'application/json, text/plain',
        'Content-Type':'application/json',

    }
})



export default globalAxios

