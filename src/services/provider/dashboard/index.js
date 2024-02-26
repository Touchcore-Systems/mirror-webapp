import authAxios from "../../../utils/axios/authAxios";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/userStore";
import { useApiStore } from "@/store/apiStore";
import { validateAndNormalizePatient } from "../../helpers";


const extractProviderId = () => {
  try {
    const store = useUserStore();
    const { user } = storeToRefs(store);
    const urlString = user.value.home_url;
    const regex = /provider_id=([^&]+)/;
    const match = urlString.match(regex);
    const provider = match ? match[1] : null;
    return provider;
  } catch (error) {
    throw new Error("Some thing went wrong . Please log in again.");
  }
};

export const getAllpatients = async () => {
  const data = await authAxios(
    `getPatients?providerId=${extractProviderId()}`
  );
  return data.allPatients;
};

export const addPatient = async (patient) => {
  const apiStore = useApiStore();
  const { apiLoading } = storeToRefs(apiStore);

  const store = useUserStore();
  const { user } = storeToRefs(store);
  patient["provider"] = {
    "_id": user.value.user_id,
    "firstName": user.value.first_name,
    "lastName": user.value.last_name
  }
  apiLoading.value = true
  try {

    const data = await authAxios(
      "addPatient",
      "POST",
      { patient }
    );

    return data;
  } catch (error) {
    throw error
  }
  finally {
    apiLoading.value = false
  }

};


export const editOrDeletePatient = async (edit = true, patientinfo) => {
  const apiStore = useApiStore();
  const { apiLoading } = storeToRefs(apiStore);
  apiLoading.value = true
  try {
    let patient = { ...patientinfo };
    if (edit) {
      patient.providerId = extractProviderId();
      patient = validateAndNormalizePatient(patient)
    }
    if (!edit) {
      if (!patient.height) {
        patient.height = {}
      }
      patient.status = "Deleted";
    }
    const data = await authAxios(
      "editPatient",
      "POST",
      { patient }
    );

    return data;
  } catch (error) {
    console.error(error);
    throw error
  }
  finally {
    apiLoading.value = false
  }

};
export const getAllAssessments = async () => {
  const data = await authAxios(`getAllAssessments`, "POST");
  return data.allAssessments;
};
