import authAxios from "../../../utils/axios/authAxios";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/userStore";
import { useApiStore } from "@/store/apiStore";


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

export const editOrDeletePatient = async (edit = true, patientinfo) => {
  const apiStore = useApiStore();
  const { apiLoading } = storeToRefs(apiStore);
  apiLoading.value = true
  try {
    const patient = { ...patientinfo };
    if (edit) {
      patient.providerId = extractProviderId();


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
    }
    const data = await authAxios(
      "editPatient",
      "POST",
      { patient }
    );

    return data;
  } catch (error) {
    throw error
  }
  finally{
    apiLoading.value = false
  }

};

export const getAllAssessments = async () => {
  const data = await authAxios(`getAllAssessments`, "POST");
  return data.allAssessments;
};
