import axios from "axios";
import { APP_URL, BASE_URL } from "../config";

const authAxios=axios.create({
    baseURL: BASE_URL + APP_URL
})