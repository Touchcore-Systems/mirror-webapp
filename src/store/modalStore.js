import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", () => {
  const patientId = ref({});
  const typeofModal = ref();
  const showModal = ref();
  const patient = ref({
    height: {},
  });
  const selectedRow = ref(null);

  //getters
  const modalStyle = computed(() =>
    typeofModal.value == "Delete Patient" ? true : false
  );

  //actions
  const handleClose = () => {
    typeofModal.value = null;
    showModal.value = false;
    document.body.classList.remove("modal-open");
  };

  const handleAddEdit = (patientDetails, type) => {
    typeofModal.value = type;
    showModal.value = true;
    patientId.value = patientDetails;
    // patient.value=patientDetails
    document.body.classList.add("modal-open");
    console.log(patient.value, "patient");
  };

  return {
    showModal,
    modalStyle,
    patient,
    typeofModal,
    selectedRow,
    handleClose,
    handleAddEdit,
  };
});
