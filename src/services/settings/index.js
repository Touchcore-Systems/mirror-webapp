import { addtoLocalstorage, getfromLocalstorage } from "@/services/helpers";
import axios from "axios";
import { APP_URL, BASE_URL } from "@/utils/config";

export const initConnection = async () => {
    document.getElementById("year")
        ? (document.getElementById("year").innerHTML = new Date().getFullYear())
        : true;
    try {
        const data = await axios.get(` ${BASE_URL + APP_URL}/default/call/json/initConnection`);
        addtoLocalstorage("backendVersion", data["backendInfo"]["backendVersion"]);
       
        const backendVersionElement = document.getElementById("backendVersion");
            if (backendVersionElement) {
                backendVersionElement.innerHTML = getfromLocalstorage("backendVersion");
            } 
    } catch (error) {
        
        console.log(error);
    }
};