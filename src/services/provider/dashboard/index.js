import authAJAX from "../../../utils/ajax/authAjax";
import { getfromLocalstorage } from "../../helpers";

const extractProviderId = () => {
    const urlString = getfromLocalstorage('home_url')
    const regex = /provider_id=([^&]+)/;
    const match = urlString.match(regex);
    const provider = match ? match[1] : null;
    return provider

}

export const getAllpatients = async () => {
    const data = await authAJAX(`/default/call/json/getPatients?providerId=${extractProviderId()}`)
    return data.allPatients
}

export const editOrDeletePatient = async (edit = true, patient) => {

    if (edit) {
        patient.providerId = extractProviderId()
        if (patient.phone == undefined || patient.phone == null)
            patient.phone = "";
        if (patient.dateOfBirth == undefined || patient.dateOfBirth == null)
            patient.dateOfBirth = "";

        if (patient.height) {
            if (patient.height.feet == "" || (!patient.height.feet)) {
                if (patient.height.inches == "" || (!patient.height.inches)) {
                    delete patient.height;
                } else {
                    error = "Invalid value for height";
                    return;
                }
            } else {
                if (patient.height.inches == "")
                    patient.height.inches = 0;
            }
        }

        if (patient.weight == "" || patient.weight == null) {
            delete patient.weight;
        }
    }


    const data = await authAJAX(`/default/call/json/editPatient`, "POST", patient)
    return data

}




export const getAllAssessments = async () => {

    const data = await authAJAX(`/default/call/json/getAllAssessments`, "POST")
    return data.allAssessments

}