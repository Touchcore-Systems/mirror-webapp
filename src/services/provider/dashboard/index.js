import authAJAX from "../../../utils/ajax/authAjax";
import { getfromLocalstorage } from "../../helpers";

export const getAllpatients = async () => {
    const urlString = getfromLocalstorage('home_url')
    const regex = /provider_id=([^&]+)/;
    const match = urlString.match(regex);
    const provider = match ? match[1] : null;
    const data = await authAJAX(`/default/call/json/getPatients?providerId=${provider}`)
    return data.allPatients
}