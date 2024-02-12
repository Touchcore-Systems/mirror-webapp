import authAxios from "../../../utils/axios/authAxios";
import { getfromLocalstorage } from "../../helpers";
import { useUserStore } from '@/store/userStore';
import { storeToRefs } from 'pinia'

const extractProviderId = () => {
   try {
    const store = useUserStore()
    const {  user } = storeToRefs(store)
  const urlString = user.value.home_url;
  const regex = /provider_id=([^&]+)/;
  const match = urlString.match(regex);
  const provider = match ? match[1] : null;
  return provider;
   } catch (error) {
    console.log(error);
    throw new Error("Some thing went wrong . Please log in again.");
   }
    
};

export const getAllpatients = async () => {
  const data = await authAxios(
    `/default/call/json/getPatients?providerId=${extractProviderId()}`
  );
  return data.allPatients;
};

export const editOrDeletePatient = async (edit = true, patient) => {
  if (edit) {
    patient.providerId = extractProviderId();
    if (patient.phone == undefined || patient.phone == null) patient.phone = "";
    if (patient.dateOfBirth == undefined || patient.dateOfBirth == null)
      patient.dateOfBirth = "";

    if (patient.height) {
      if (patient.height.feet == "" || !patient.height.feet) {
        if (patient.height.inches == "" || !patient.height.inches) {
          delete patient.height;
        } else {
          error = "Invalid value for height";
          return;
        }
      } else {
        if (patient.height.inches == "") patient.height.inches = 0;
      }
    }

    if (patient.weight == "" || patient.weight == null) {
      delete patient.weight;
    }
  }

  const data = await authAxios(
    `/default/call/json/editPatient`,
    "POST",
    patient
  );
  return data;
};

export const getAllAssessments = async () => {
  const data = await authAxios(`/default/call/json/getAllAssessments`, "POST");
  return data.allAssessments;
};
