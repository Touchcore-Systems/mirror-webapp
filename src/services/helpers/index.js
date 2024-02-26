import { storeToRefs } from "pinia";
import { useModalStore } from "@/store/modalStore.js";


export const formatDate=(date)=> {
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    return formattedDate;
  }
  export const validateAndNormalizePatient = (patient) => {
    if (patient.height) {
      if (!patient.height.feet) {
        if (!patient.height.inches) {
          delete patient.height;
        } else {
          throw new Error("Invalid value for height");
        }
      } else if (!patient.height.inches) {
        patient.height.inches = 0;
      }
    }
  
    if (!patient.weight) {
      delete patient.weight;
    }
  
    return patient;
  };
  

  export const formatPatientObject = (values, date) => {
    const store = useModalStore();
    const { showModal, patient, patientId, typeofModal, toastMessages } =storeToRefs(store);
    
    let updatedPatient = {
      ...patient.value, // Retain existing properties
      dateOfBirth: formatDate(new Date(date)) || null,
    };
    
    updatedPatient.firstName= values.firstName || "",
    updatedPatient.lastName= values.lastName || "",
    updatedPatient.email= values.email || "",
    updatedPatient.phone= values.phone || "",
    updatedPatient.gender= values.gender || "",
    updatedPatient.weight= values.weightLbs || null
    
    if (values.heightFeet || values.heightInches) {
      updatedPatient.height = {
        feet: values.heightFeet || null,
        inches: values.heightInches || 0,
      };
    }
  
    return validateAndNormalizePatient(updatedPatient);
  };

