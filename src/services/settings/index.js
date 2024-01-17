import  AJAX  from '../../utils/ajax/Ajax';
import { addtoLocalstorage, getfromLocalstorage } from "@/services/helpers";

export const initConnection = async () => {
    document.getElementById("year")
        ? (document.getElementById("year").innerHTML = new Date().getFullYear())
        : true;
    try {
        const data = await AJAX("/default/call/json/initConnection");
        addtoLocalstorage("backendVersion", data["backendInfo"]["backendVersion"]);
       
        const backendVersionElement = document.getElementById("backendVersion");
            if (backendVersionElement) {
                backendVersionElement.innerHTML = getfromLocalstorage("backendVersion");
            } 
            // else {
            //     console.error("Element with ID 'backendVersion' not found.");
            // }
    } catch (error) {
        console.log(error);
    }
};