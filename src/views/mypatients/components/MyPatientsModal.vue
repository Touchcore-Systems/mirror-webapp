<script setup>
import BaseInput from "@/components/base/BaseInput.vue";
import BaseModal from "@/components/base/BaseModal.vue";

import { useModalStore } from "@/store/modalStore.js";
import { useToastStore } from "@/store/toastStore.js";

import { storeToRefs } from "pinia";
import { ref, watch, computed } from "vue";
import { editOrDeletePatient } from "../../../services/provider/dashboard";
import DatePicker from "../../../components/elements/DatePicker.vue";

const store = useModalStore();
const { showModal, patient, typeofModal } = storeToRefs(store);
const { handleClose } = store;

const toastStore = useToastStore();
const { toastContent, toastTitle } = storeToRefs(toastStore);
const { showToast } = toastStore;

const patientDob = () => {
  if (patient.value.email !== undefined) {
    if (patient.value.dateOfBirth !== undefined) {
      console.log("patient.value.dateOfBirth exists");
      return new Date(patient.value.dateOfBirth);
    } else {
      console.log("patient.value.dateOfBirth doesnot exists");
      return null;
    }
  }
  console.log("patient.value doesnot exists");
  return null;
};

const date = ref(patientDob());

watch(patient, () => {
  date.value = patientDob();
});

const handleSubmit = async (e) => {
  try {
    toastTitle.value = typeofModal.value;
    patient.value.dateOfBirth =new Date(date.value);
    console.log(patient.value.dateOfBirth, "Date of Birth Value");
    switch (typeofModal.value) {
      case "Add Patient":
        toastContent.value = `Succesfullly Added ${patient.value.firstName}'s Details`;
        await handleClose();
        break;
      case "Edit Patient":
        await editOrDeletePatient(true, patient.value);
        toastContent.value = `Succesfullly Edited ${patient.value.firstName}'s Details`;
        showToast("success");
        handleClose();
        break;
      case "Delete Patient":
        editOrDeletePatient(false, patient.value);
        toastContent.value = `Succesfullly Deleted  ${patient.value.firstName}`;
        showToast("success");
        handleClose();
        break;
      default:
        console.error(`Unexpected typeofModal value: ${typeofModal.value}`);
    }
  } catch (error) {
    toastContent.value = error;
    showToast("error");
  }
};
const onDateChanged = (changedDate) => {
  console.log(changedDate,"onDateChanged");
  date.value = changedDate
};



</script>
<template>
  <BaseModal
    :centered="typeofModal == 'Delete Patient'"
    :showModal="showModal"
    :submit-type="typeofModal"
    @closeClick="handleClose"
    @submitClick="handleSubmit"
  >
    <h6 v-if="typeofModal == 'Add Patient' || typeofModal == 'Edit Patient'">
      <div class="demo-forms form">
        <div class="row form-group pl-pr-15">
          <BaseInput
            outerdivClass="col-sm-12 col-md-6"
            placeholder="First Name"
            required
            label="First Name"
            v-model="patient.firstName"
            labelClass="control-label"
          />
          <BaseInput
            outerdivClass="col-sm-12 col-md-6"
            placeholder="Last Name"
            required
            label="Last Name"
            v-model="patient.lastName"
            labelClass="control-label"
          />
        </div>
        <div class="row form-group pl-pr-15">
          <BaseInput
            outerdivClass="col-sm-12 col-md-6"
            placeholder="Email"
            :disabled="typeofModal == 'Edit Patient'"
            required
            label="Email"
            type="email"
            v-model="patient.email"
            labelClass="control-label"
          />
          <BaseInput
            outerdivClass="col-sm-12 col-md-6"
            placeholder="Phone"
            label="Phone"
            type="tel"
            v-model="patient.phone"
            labelClass="control-label"
          />
        </div>
        <div class="row form-group pl-pr-15">
          <DatePicker :date="date" @choosed-date="onDateChanged" />
        
          <BaseInput
            outerdivClass="col-sm-12 col-md-6"
            placeholder="Gender"
            required
            label="Gender"
            v-model="patient.gender"
            labelClass="control-label"
          >
            <template #others>
              <select v-model="patient.gender" class="form-control" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="notSpecified">Not Specified</option>
              </select>
            </template>
          </BaseInput>
        </div>

        <div class="row form-group pl-pr-15">
          <BaseInput
            outerdivClass="col-sm-12 col-md-6"
            label="Height"
            labelClass="control-label"
          >
            <template #others>
              <div class="row">
                <div class="input-group col-6">
                  <input
                    v-model.number="patient.height.feet"
                    type="number"
                    min="1"
                    max="10"
                    class="form-control"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">feet</span>
                  </div>
                </div>
                <div class="input-group col-6">
                  <input
                    v-model.number="patient.height.inches"
                    type="number"
                    min="0"
                    max="11"
                    class="form-control"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">inches</span>
                  </div>
                </div>
              </div>
            </template>
          </BaseInput>

          <BaseInput
            outerdivClass="col-sm-12 col-md-6"
            label="Weight"
            labelClass="control-label"
          >
            <template #others>
              <div class="input-group">
                <input
                  v-model.number="patient.weight"
                  type="number"
                  min="1"
                  max="300"
                  class="form-control"
                />
                <div class="input-group-append">
                  <span class="input-group-text">lbs</span>
                </div>
              </div>
            </template>
          </BaseInput>
        </div>
      </div>
    </h6>

    <h6 v-if="typeofModal == 'Delete Patient'">
      Are you sure you want to delete this patient?
    </h6>
  </BaseModal>
</template>

<style>
.pl-pr-15 {
  padding-left: 15px;
  padding-right: 15px;
}


</style>
