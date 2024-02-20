import { computed, ref, watch } from "vue";

import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", () => {
  const patientId = ref(null);
  const typeofModal = ref(null);
  const showModal = ref(null);
  const patient = ref({
    height: {
      feet: "",
      inches: "",
    },
  });
  const error = ref("");
  const selectedRow = ref(null);

  



  //actions




  const handleClose = () => {
    patientId.value = null;
    patient.value = {
      height: {},
    };
    typeofModal.value = null;
    showModal.value = false;
    document.body.classList.remove("modal-open");
    
  };

  const handleAddEdit = (patientDetails, type) => {
    typeofModal.value = type;
    showModal.value = true;
    
    if (type === "Edit Patient") {
      patientId.value = patientDetails?._id;
      
      
      if(!patientDetails)
      return
      
      patient.value = patientDetails || {};
  

      patient.value.phone = patient.value.phone || "";
      patient.value.dateOfBirth = patient.value.dateOfBirth || "";
  
      
      patient.value.height = patient.value.height || { feet: "", inches: "" };
      patient.value.weight = patient.value.weight || "";
    }
    document.body.classList.add("modal-open");
  
  };

  return {
    showModal,
    patient,
    typeofModal,
    selectedRow,
    handleClose,
    handleAddEdit,
    patientId,
  };
});
