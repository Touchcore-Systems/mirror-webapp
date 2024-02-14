import authAxios from "../../../utils/axios/authAxios";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/userStore";

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
  try {
    console.log(patient, "patient");
    if (edit) {
      patient.providerId = extractProviderId();
    }
    console.log({patient}, "patient");
    const data = await authAxios(
      "/default/call/json/editPatient",
      "POST",
      {patient}
    );
    return data;
  } catch (error) {
    throw error
  }

};

export const getAllAssessments = async () => {
  const data = await authAxios(`/default/call/json/getAllAssessments`, "POST");
  return data.allAssessments;
};
